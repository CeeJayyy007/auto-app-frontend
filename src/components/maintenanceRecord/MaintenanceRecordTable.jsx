import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { formattedNumber } from '@/utils/helpers';

const MaintenanceRecordTable = ({
  name,
  tableData,
  status,
  quantities,
  setQuantities
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [name]: parseInt(value, 10) || 0
    }));
  };

  const handleTotal = (quantity, price) => {
    return quantity * price;
  };

  return (
    <ScrollArea className="max-h-[200px] overflow-y-auto rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="pl-4">{name}</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price(₦)</TableHead>
            <TableHead>Amount(₦)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="py-0 ">
          {tableData.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="h-[150px] text-center">
                No {name} added.
              </TableCell>
            </TableRow>
          ) : (
            tableData.map((item) => (
              <TableRow key={item.label}>
                <TableCell className="max-w-[150px] truncate pl-4">
                  {item.label}
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    value={quantities[item.label] || ''}
                    onChange={handleChange}
                    name={item.label}
                    className="h-[28px] max-w-[80px]"
                    disabled={status === ('Canceled' || 'Completed')}
                  />
                </TableCell>
                <TableCell>{item.price || item.finalPrice}</TableCell>
                <TableCell>
                  {formattedNumber(
                    handleTotal(
                      quantities[item.label] || 1,
                      item.price || item.finalPrice
                    )
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};

export default MaintenanceRecordTable;
