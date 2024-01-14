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
import { Button } from '../ui/button';

const RecordTotalTable = ({ data }) => {
  const [discount, setDiscount] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDiscount((prevDiscount) => ({
      ...prevDiscount,
      [name]: parseInt(value, 10) || 0
    }));
  };

  const handleTotal = (discount, price) => {
    return price - discount;
  };

  const total = data.reduce((acc, item) => {
    const itemTotal = handleTotal(discount[item.title] || 0, item.amount);
    return acc + itemTotal;
  }, 0);

  return (
    <>
      <div className="rounded-md border mb-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Amount(₦)</TableHead>
              <TableHead>Discount(₦)</TableHead>
              <TableHead>Total(₦)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="py-0">
            {data.map((item) => (
              <TableRow key={item.title}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>
                  <Input
                    type="number"
                    value={discount[item.title] || ''}
                    onChange={handleChange}
                    name={item.title}
                    className="h-[28px] max-w-[100px]"
                  />
                </TableCell>
                <TableCell className="w-[100px]">
                  {handleTotal(discount[item.title] || 0, item.amount)}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell className="font-medium">Total</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className="w-[100px] font-bold">{total}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between space-x-4">
        <Button variant="outline" className="mt-4 w-full">
          Save Record
        </Button>{' '}
        <Button className="mt-4 w-full">Go to Payment (₦{total})</Button>
      </div>
    </>
  );
};

export default RecordTotalTable;
