import React, { useState } from 'react';
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

const MaintenanceRecordTable = ({ name, data }) => {
  const [quantities, setQuantities] = useState({});

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
    <ScrollArea className="max-h-[250px] overflow-y-auto rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S/No.</TableHead>
            <TableHead>{name}</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price(₦)</TableHead>
            <TableHead>Amount(₦)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="py-0">
          {data.map((item) => (
            <TableRow key={item.title}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell className="min-w-[200px] max-w-[400px] truncate">
                {item.title}
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  value={quantities[item.title] || ''}
                  onChange={handleChange}
                  name={item.title}
                  className="h-[28px] max-w-[100px]"
                />
              </TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                {handleTotal(quantities[item.title] || 1, item.price)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};

export default MaintenanceRecordTable;
