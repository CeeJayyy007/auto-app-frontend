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
            <TableRow>
              <TableHead>S/No.</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Note</TableHead>
              <TableHead>Services</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="py-0">
            {appointmentData.map((appointment, index) => (
              <TableRow key={appointment.createdAt}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  {new Date(appointment.date).toDateString()}
                </TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.note}</TableCell>
                <TableCell className="truncate">
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
