import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import DatePicker from '../datePicker/DatePicker';
import RecordCombobox from '../maintenanceRecord/RecordCombobox';
import { Textarea } from '../ui/textarea';
import { services } from './data';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const EditAppointment = ({ data }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          role="menuitem"
          variant="outline border-none"
          className="w-full flex cursor-default font-normal justify-start select-none items-center hover:bg-gray-100 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
        >
          Edit
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Appointment</SheetTitle>
          <SheetDescription>
            Edit Appointment and click save when done.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col space-y-4 py-4">
          <div className="grid ">
            <Label htmlFor="date" className="text-left mb-2 sr-only">
              Select Date
            </Label>
            <DatePicker />
          </div>
          <div className="grid ">
            <Label htmlFor="date" className="text-left mb-2 sr-only">
              Select Vehicle
            </Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select vehicle" />
              </SelectTrigger>
              <SelectContent>
                {data.map((item) => (
                  <SelectItem key={item.make} value={item}>
                    {`${item.make} ${item.model} ${item.year} `}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid items-center">
            <Label htmlFor="services" className="text-left mb-2 sr-only">
              Select Services
            </Label>
            <RecordCombobox data={services} name="services" />
          </div>
          <div className="grid ">
            <Label htmlFor="note" className="text-left mb-2 sr-only">
              Note
            </Label>
            <Textarea placeholder="Enter service request note." />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="w-full">
              Save Appointment
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default EditAppointment;
