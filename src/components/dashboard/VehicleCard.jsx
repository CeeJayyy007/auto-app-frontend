import Image from './Image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
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
    make: 'Toyota',
    model: 'Camry',
    year: '2023',
    image: '/src/assets/lambo.jpeg'
  },
  {
    id: 2,
    make: 'Tesla',
    model: 'Model 3',
    year: '2021',
    image: '/src/assets/range.jpeg'
  },
  {
    id: 3,
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
        <CardTitle>Your vehicle</CardTitle>
        <CardDescription>Vehicle details and overview.</CardDescription>
        <Separator className="my-4" />
      </CardHeader>
      <ScrollArea>
        <CardContent>
          <div className="flex space-x-8 pb-4">
            {vehicleData.map((vehicle) => (
              <div key={vehicle.image}>
                <Image width={150} height={150} vehicle={vehicle} />
                <h4 className="mt-2 font-medium leading-none">
                  {vehicle.make}
                </h4>
                <p className="text-sm text-muted-foreground mt-0">
                  {vehicle.model} | {vehicle.year}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Card>
  );
};

export default VehicleCard;
