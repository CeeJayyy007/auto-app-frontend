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
import { Badge } from '@/components/ui/badge';
import { commaSeparatedArray, statusColor } from '@/utils/helpers';
import { Button } from '@/components/ui/button';

const appointmentData = [
  {
    id: 1,
    date: '15/12/2023',
    note: 'Urgent fix',
    services: ['oil change', 'tyre change'],
    status: 'completed'
  },
  {
    id: 2,
    date: '12/12/2023',
    note: 'Change oil',
    services: ['oil change', 'tyre change'],
    status: 'pending'
  },
  {
    id: 3,
    date: '11/12/2023',
    note: 'Fix the issues',
    services: ['steering fix', 'tyre change'],
    status: 'approved'
  }
];

const AppointmentCard = () => {
  return (
    <Card className="col-span-4">
      <CardHeader className="pb-0">
        <div className="flex flex-row justify-between">
          <div>
            <CardTitle className="text-gray-700">Appointments</CardTitle>
            <CardDescription>Details and overview.</CardDescription>
          </div>
          <Button>Add Appointment</Button>
        </div>
        <Separator />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S/No.</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Note</TableHead>
              <TableHead>Services</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="py-0">
            {appointmentData.map((appointment) => (
              <TableRow key={appointment.date}>
                <TableCell className="font-medium">{appointment.id}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.note}</TableCell>
                <TableCell className="truncate">
                  {commaSeparatedArray(appointment.services)}
                </TableCell>
                <TableCell>
                  {
                    <Badge
                      className={`font-normal rounded-full ${statusColor(
                        appointment.status
                      )}`}
                    >
                      {appointment.status}
                    </Badge>
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
