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

const MaintenanceRecordTable = ({ name, tableData }) => {
  const [quantities, setQuantities] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [name]: parseInt(value, 10) || 0
    }));
  };

  const handleTotal = (quantity, price) => {
    return (quantity * price).toFixed(2);
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
        <TableBody className="py-0 ">
          {tableData.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="h-[200px] text-center">
                No {name} added.
              </TableCell>
            </TableRow>
          ) : (
            tableData.map((item, index) => (
              <TableRow key={item.label}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="min-w-[200px] max-w-[400px] truncate">
                  {item.label}
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    value={quantities[item.label] || ''}
                    onChange={handleChange}
                    name={item.label}
                    className="h-[28px] max-w-[100px]"
                  />
                </TableCell>
                <TableCell>{item.price || item.finalPrice}</TableCell>
                <TableCell>
                  {handleTotal(
                    quantities[item.label] || 1,
                    item.price || item.finalPrice
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
