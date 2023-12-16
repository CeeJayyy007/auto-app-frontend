import Image from '../image/Image';
import { Separator } from '@/components/ui/Separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import IconButton from '../button/IconButton';

const vehicleData = [
  {
    id: 1,
    make: 'Lamborghini',
    model: 'Aventador',
    year: '2022',
    image: '/src/assets/lambo.jpeg'
  },
  {
    id: 2,
    make: 'Mercedes',
    model: 'Benz',
    year: '2021',
    image: '/src/assets/benz.jpeg'
  }
];

const VehicleCard = () => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Vehicle</CardTitle>
        <CardDescription>Details and overview.</CardDescription>
        <Separator className="my-4" />
      </CardHeader>
      <CardContent>
        <div className="flex space-x-8 pb-4">
          {vehicleData.map((vehicle) => (
            <div key={vehicle.image}>
              <Image width={150} height={150} vehicle={vehicle} />
              <h4 className="mt-2 font-medium leading-none">{vehicle.make}</h4>
              <p className="text-sm text-muted-foreground mt-0">
                {vehicle.model} | {vehicle.year}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
