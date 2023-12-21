import React, { useEffect, useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Image from '../components/image/Image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { avatarFallback } from '@/utils/helpers';
import AppointmentCard from '@/components/appointment/AppointmentCard';
import IconDropdownMenu from '@/components/icons/IconDropdownMenu';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import ProfileStats from '@/components/profile/ProfileStats';

const vehicleData = [
  {
    id: 1,
    make: 'Lamborghini',
    model: 'Aventador',
    year: '2022',
    registrationNumber: 'LND123XA',
    image: '/src/assets/lambo.jpeg'
  },
  {
    id: 2,
    make: 'Mercedes',
    model: 'Benz',
    year: '2021',
    registrationNumber: 'LND123XX',
    image: '/src/assets/benz.jpeg'
  }
];

const userData = {
  id: 1,
  firstName: 'John',
  lastName: 'Jackson',
  username: 'johndoe001',
  email: 'johnjackson@mail.com',
  phone: '0712345678',
  role: 'User'
};

const userStatsData = {
  memberSince: '12/12/2020',
  allTimeSpend: 10000,
  totalSpendThisMonth: 1000,
  mostFrequentService: 'oil change'
};

const Profile = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const { firstName, lastName, role, email, phone } = userData;
  const name = `${firstName} ${lastName}`;

  return (
    <div className="flex flex-col">
      <h3 className="mb-4 font-bold text-gray-700">Profile</h3>
      <div className="grid gap-4 md:grid-cols-5">
        <div className="col-span-2 rounded-[14px] p-4 bg-green-500 md:h-[600px] ">
          <div className="grid grid-cols-3 pt-4 mx-8">
            <div className="">
              <p className="text-muted-foreground text-green-200">Make</p>
              <p className="text-xl text-white mt-1">Toyota</p>
            </div>
            <Separator
              orientation="vertical"
              className="bg-green-400 h-[45px]  w-[2px] my-4 mx-[40px]"
            />
            <div>
              <p className="text-muted-foreground text-green-200">Model</p>
              <p className="text-xl text-white mt-1">Corolla</p>
            </div>
          </div>
          <div className="grid grid-cols-3 mx-8">
            <div className="">
              <p className="text-muted-foreground text-green-200">Year</p>
              <p className="text-xl text-white mt-1">2016</p>
            </div>
            <Separator
              orientation="vertical"
              className="bg-green-400 h-[45px]  w-[2px] my-4  mx-[40px]"
            />
            <div className="">
              <p className="text-muted-foreground text-green-200">Reg. No.</p>
              <p className="text-xl text-white mt-1">LND123XA</p>
            </div>
          </div>
          <img
            src="/src/assets/car-top-view.png"
            alt="car top view"
            className={`h-[600px] w-[300px] mx-auto transition-transform transform duration-1000 ${
              loaded ? 'translate-y-0' : 'translate-y-full'
            }`}
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className="grid col-span-3 rounded-[14px] gap-y-4">
          <div className="col-span-3 rounded-[14px] bg-white py-4">
            <div className="flex flex-row justify-between items-start">
              <h3 className="text-xl font-semibold mx-4 text-gray-700">
                User Profile
              </h3>
              <IconDropdownMenu
                label="User menu"
                children={<DropdownMenuItem>Add Vehicle</DropdownMenuItem>}
              />
            </div>
            <div className="flex flex-row items-center">
              <Avatar className="h-[100px] w-[100px] m-4">
                <AvatarImage
                  src="src/assets/profile.webp"
                  alt="profile-avatar"
                />
                <AvatarFallback>{avatarFallback(name)}</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <p className="text-xl mt-1">{name}</p>
                <p className="text-sm text-muted-foreground mt-0">{email}</p>
                <p className="text-sm text-muted-foreground mt-0 mb-2">
                  {phone}
                </p>
                <Badge className="w-[80px] flex justify-center px-1 font-normal rounded-full bg-green-100 text-green-400 border-green-400">
                  {role}
                </Badge>
              </div>
            </div>
          </div>
          <div className="col-span-3 rounded-[14px] bg-white p-4">
            <div className="flex flex-row justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Vehicles
                </h3>
                <p className="text-sm text-muted-foreground mt-0">
                  Click to view details
                </p>
              </div>
              <IconDropdownMenu label="Vehicle menu" />
            </div>
            <ScrollArea className="max-w-[600px] overflow-x-auto">
              <RadioGroup
                defaultValue={vehicleData[0].registrationNumber}
                className="flex flex-row justify-center space-x-4 mt-4"
              >
                {vehicleData.map((vehicle) => (
                  <div key={vehicle.registrationNumber}>
                    <RadioGroupItem
                      value={vehicle.registrationNumber}
                      id={vehicle.registrationNumber}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={vehicle.registrationNumber}
                      className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Image vehicle={vehicle} />
                      {vehicle.make} {vehicle.model}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
          <AppointmentCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;
