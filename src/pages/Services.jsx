import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { avatarFallback } from '@/utils/helpers';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import IconDropdownMenu from '@/components/icons/IconDropdownMenu';
import AlertDialogComponent from '@/components/alert/AlertDialog';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import DrawerComponent from '@/components/alert/Drawer';

const serviceData = [
  {
    id: 1,
    name: 'Oil change',
    price: '₦ 1000',
    duration: '30 mins',
    description: 'Oil change description',
    image: '/src/assets/oil-change.jpeg'
  },
  {
    id: 2,
    name: 'Car wash',
    price: '₦ 500',
    duration: '30 mins',
    description: 'Car wash description',
    image: '/src/assets/car-wash.jpeg'
  },
  {
    id: 3,
    name: 'Car wax',
    price: '₦ 500',
    duration: '30 mins',
    description: 'Car wax description',
    image: '/src/assets/car-wax.jpeg'
  },
  {
    id: 4,
    name: 'Car polish',
    price: '₦ 500',
    duration: '30 mins',
    description: 'Car polish description',
    image: '/src/assets/car-polish.jpeg'
  },
  {
    id: 5,
    name: 'Car detailing',
    price: '₦ 500',
    duration: '30 mins',
    description: 'Car detailing description',
    image: '/src/assets/car-detailing.jpeg'
  },
  {
    id: 6,
    name: 'Car painting',
    price: '₦ 500',
    duration: '30 mins',
    description: 'Car painting description',
    image: '/src/assets/car-painting.jpeg'
  },
  {
    id: 7,
    name: 'Car servicing',
    price: '₦ 500',
    duration: '30 mins',
    description: 'Car servicing description',
    image: '/src/assets/car-servicing.jpeg'
  },
  {
    id: 8,
    name: 'Car repairs',
    price: '₦ 500',
    duration: '30 mins',
    description: 'Car repairs description',
    image: '/src/assets/car-repairs.jpeg'
  },
  {
    id: 9,
    name: 'Car maintenance',
    price: '₦ 500',
    duration: '30 mins',
    description: 'Car maintenance description',
    image: '/src/assets/car-maintenance.jpeg'
  },
  {
    id: 10,
    name: 'Car inspection',
    price: '₦ 500',
    duration: '30 mins',
    description: 'Car inspection description',
    image: '/src/assets/car-inspection.jpeg'
  },
  {
    id: 11,
    name: 'Car diagnostics',
    price: '₦ 500',
    duration: '30 mins',
    description: 'Car diagnostics description',
    image: '/src/assets/car-diagnostics.jpeg'
  },
  {
    id: 12,
    name: 'Car alignment',
    price: '₦ 500',
    duration: '30 mins',
    description: 'Car alignment description',
    image: '/src/assets/car-alignment.jpeg'
  }
];

const Services = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="mb-4 font-bold text-gray-700">Activities</h3>
        <Button>Add Service</Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {serviceData.map((service) => (
          <Card className="text-sm" key={service.name}>
            <CardHeader>
              <div className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-sm">{service.name}</CardTitle>
                  <CardDescription className="text-xs">
                    {service.description}
                  </CardDescription>
                </div>
                <IconDropdownMenu
                  className="m-0"
                  label={service.name}
                  viewAction={
                    <DrawerComponent
                      actionLabel="Close"
                      triggerLabel="View"
                      title={`Viewing ${service.name} Service`}
                      description={service.description}
                      cancelLabel="Cancel"
                      body={
                        <div className="flex flex-col space-y-4 py-4">
                          <h4 className="text-sm font-semibold mx-4">
                            Name: {service.name}
                          </h4>
                          <h4 className="text-sm font-semibold mx-4">
                            Price: {service.price}
                          </h4>
                          <h4 className="text-sm font-semibold mx-4">
                            Duration: {service.duration}
                          </h4>
                          <h4 className="text-sm font-semibold mx-4">
                            Created By: Admin
                          </h4>
                          <h4 className="text-sm font-semibold mx-4">
                            Updated By: Admin
                          </h4>
                          <h4 className="text-sm font-semibold mx-4">
                            Updated on: 12/12/2023
                          </h4>
                        </div>
                      }
                    />
                  }
                  deleteAction={
                    <AlertDialogComponent
                      actionLabel="Delete"
                      triggerLabel="Delete"
                      title="Delete Service"
                      description={`Are you sure you want to delete ${service.name} service?`}
                      cancelLabel="Cancel"
                    />
                  }
                />
              </div>
            </CardHeader>

            <CardContent className="flex justify-center">
              <Avatar className="h-[100px] w-[100px]">
                <AvatarImage src={service.image} alt="Avatar" />
                <AvatarFallback>{avatarFallback(service.name)}</AvatarFallback>
              </Avatar>
            </CardContent>
            <div className="flex flex-row justify-between">
              <CardFooter>{service.price}</CardFooter>
              <CardFooter>{service.duration}</CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
