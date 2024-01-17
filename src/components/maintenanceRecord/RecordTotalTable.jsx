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
import { formattedNumber } from '@/utils/helpers';
import { useNavigate } from 'react-router-dom';

const RecordTotalTable = ({
  servicesData,
  itemsData,
  status,
  discount,
  setDiscount,
  handleSave
}) => {
  const navigate = useNavigate();

  const handleTotalData = (data) =>
    data.reduce(
      (acc, item) => acc + parseInt(item.price) || parseInt(item.finalPrice),
      0
    );

  const handleChange = (name, value) => {
    setDiscount((prevDiscount) => ({
      ...prevDiscount,
      [name]: parseInt(value, 10) || 0
    }));
  };

  const handleTotal = (name, data) =>
    handleTotalData(data) - (discount[name] || 0);

  const total =
    parseFloat(handleTotal('items', itemsData)) +
    parseFloat(handleTotal('services', servicesData));

  return (
    <>
      <div className="rounded-md border mb-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-4">Item</TableHead>
              <TableHead>Amount(₦)</TableHead>
              <TableHead>Discount(₦)</TableHead>
              <TableHead>Total(₦)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="py-0">
            {['services', 'items'].map((name) => (
              <TableRow key={name}>
                <TableCell className="font-medium pl-4">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </TableCell>
                <TableCell>
                  {handleTotalData(
                    name === 'services' ? servicesData : itemsData
                  ).toFixed(2)}
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    value={discount[name] || ''}
                    onChange={(e) => handleChange(name, e.target.value)}
                    name={name}
                    className="h-[28px] max-w-[100px]"
                    disabled={status === ('Canceled' || 'Completed')}
                  />
                </TableCell>
                <TableCell className="w-[100px]">
                  {formattedNumber(
                    handleTotal(
                      name,
                      name === 'services' ? servicesData : itemsData
                    )
                  )}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell className="font-medium pl-4">Total</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className="w-[100px] font-bold text-[16px]">
                {formattedNumber(total)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between space-x-4">
        <Button variant="outline" className="mt-4 w-full" onClick={handleSave}>
          Save Record
        </Button>{' '}
        <Button
          className="mt-4 w-full"
          disabled={!(status === 'Ready')}
          onClick={() => navigate('/payment-integration')}
        >
          Go to Payment (₦ {formattedNumber(total)})
        </Button>
      </div>
    </>
  );
};

export default RecordTotalTable;
