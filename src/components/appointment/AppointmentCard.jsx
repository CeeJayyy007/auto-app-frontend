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
import { ScrollArea } from '../ui/scroll-area';

const AppointmentCard = ({ appointments }) => {
  const appointmentData = formatDataArray(appointments, 4);

  return (
    <Card className="col-span-4">
      <CardHeader className="pb-2 ">
        <div className="flex flex-row justify-between">
          <div>
            <CardTitle className="text-gray-700">Appointments</CardTitle>
            <CardDescription>Details and overview.</CardDescription>
          </div>
          <ButtonLink to="/appointments">View All</ButtonLink>
        </div>
        {/* <Separator /> */}
      </CardHeader>
      <CardContent className="px-4">
        <ScrollArea className="max-h-[200px] overflow-y-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="text-xs">
                <TableHead className="pl-4">Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Note</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="py-0 text-xs">
              {appointmentData.map((appointment) => (
                <TableRow key={appointment.createdAt}>
                  <TableCell className="min-w-[80px] pl-4">
                    {getDate(appointment.date)}
                  </TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell className="max-w-[200px] truncate ">
                    {appointment.note}
                  </TableCell>
                  <TableCell className="max-w-[100px]">
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
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;
