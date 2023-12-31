import { Separator } from '@/components/ui/Separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  commaSeparatedArray,
  formatDataArray,
  getDate,
  statusColor
} from '@/utils/helpers';
import ColouredBadge from '../badge/ColouredBadge';
import ButtonLink from '../button/ButtonLink';

const AppointmentCard = ({ appointments }) => {
  const appointmentData = formatDataArray(appointments, 4);

  return (
    <Card className="col-span-4">
      <CardHeader className="pb-0">
        <div className="flex flex-row justify-between">
          <div>
            <CardTitle className="text-gray-700">Appointments</CardTitle>
            <CardDescription>Details and overview.</CardDescription>
          </div>
          <ButtonLink to="/appointments">View All</ButtonLink>
        </div>
        <Separator />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="text-xs">
              <TableHead>S/No.</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Note</TableHead>
              <TableHead>Services</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="py-0 text-xs">
            {appointmentData.map((appointment, index) => (
              <TableRow key={appointment.createdAt}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="min-w-[80px]">
                  {getDate(appointment.date)}
                </TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell className="max-w-[150px] truncate ">
                  {appointment.note}
                </TableCell>
                <TableCell className="max-w-[150px] truncate ">
                  {commaSeparatedArray(appointment.services)}
                </TableCell>
                <TableCell>
                  {
                    <ColouredBadge
                      status={appointment.status}
                      colorFn={statusColor}
                    />
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;
