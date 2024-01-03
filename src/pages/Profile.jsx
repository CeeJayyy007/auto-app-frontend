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
import { Badge } from '@/components/ui/badge';
import ProfileStats from '@/components/profile/ProfileStats';
import AlertDialogComponent from '@/components/display/AlertDialog';
import SideSheet from '@/components/display/SideSheet';
import useProfile from '@/hooks/useProfile';
import { useNavigate } from 'react-router-dom';
import VehicleForm from '@/components/profile/VehicleForm';
import {
  AddVehicleFormSchema,
  EditVehicleFormSchema
} from '@/components/profile/VehicleFormValidation';
import {
  AddUserFormSchema,
  EditUserFormSchema
} from '@/components/profile/UserFormValidation';
import UserForm from '@/components/profile/UserForm';
import { useVehicleDispatch, useVehicleValue } from '@/context/VehicleContext';

const userStatsData = {
  memberSince: '12/12/2020',
  allTimeSpend: 10000,
  totalSpendThisMonth: 1000,
  mostFrequentService: 'oil change'
};

const Profile = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const dispatchVehicle = useVehicleDispatch();
  const selectedVehicle = useVehicleValue();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const { result, addVehicle, editVehicle, removeVehicle, editUser } =
    useProfile(navigate);

  const profile = result.data || {};

  // do not render anything if profile data is still null
  if (!profile) {
    return null;
  }

  if (result.isLoading) {
    return <div>loading data...</div>;
  } else if (result.isError) {
    return <div>error loading data</div>;
  }

  const { firstName, lastName, roles, email, phone } = profile.user;
  const vehicles = profile.vehicles.sort((a, b) => a.id - b.id);
  const appointments = profile.appointments;
  const name = `${firstName} ${lastName}`;

  const handleSelectVehicle = (vehicle) => {
    dispatchVehicle({ type: 'SET_VEHICLE', payload: vehicle });
  };

  return (
    <div className="flex flex-col">
      <h3 className="mb-4 font-bold text-gray-700">Profile</h3>
      <div className="grid gap-4 md:grid-cols-5">
        <div className="col-span-2 rounded-[14px] p-4 bg-green-500 md:h-[600px] ">
          <div className="grid grid-cols-3 pt-4 mx-8">
            <div className="">
              <p className="text-muted-foreground text-green-300">Make</p>
              <p className="text-xl text-white mt-1">
                {selectedVehicle ? selectedVehicle.make : vehicles[0].make}
              </p>
            </div>
            <Separator
              orientation="vertical"
              className="bg-green-400 h-[45px]  w-[2px] my-4 mx-[40px]"
            />
            <div>
              <p className="text-muted-foreground text-green-300">Model</p>
              <p className="text-xl text-white mt-1">
                {selectedVehicle ? selectedVehicle.model : vehicles[0].model}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 mx-8">
            <div className="">
              <p className="text-muted-foreground text-green-300">Year</p>
              <p className="text-xl text-white mt-1">
                {selectedVehicle ? selectedVehicle.year : vehicles[0].year}
              </p>
            </div>
            <Separator
              orientation="vertical"
              className="bg-green-400 h-[45px]  w-[2px] my-4  mx-[40px]"
            />
            <div className="">
              <p className="text-muted-foreground text-green-300">Reg. No.</p>
              <p className="text-xl text-white mt-1">
                {selectedVehicle
                  ? selectedVehicle.registrationNumber
                  : vehicles[0].registrationNumber}
              </p>
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
          <div className="col-span-3 rounded-[14px] bg-white py-4 pr-4">
            <div className="flex flex-row justify-between items-start">
              <h3 className="text-xl font-semibold mx-4 text-gray-700">
                User Profile
              </h3>

              {/* Edit User Profile */}
              <IconDropdownMenu
                label="User menu"
                editAction={
                  <SideSheet
                    triggerLabel="Edit"
                    title="Edit User Profile"
                    description="Edit User Profile details and click Save when done."
                    actionLabel="Save Profile"
                    body={
                      <UserForm
                        user={profile.user}
                        formAction={editUser}
                        formValidation={EditUserFormSchema}
                        buttonText="Save"
                      />
                    }
                  />
                }
                deleteAction={
                  <AlertDialogComponent
                    actionLabel="Delete"
                    triggerLabel="Delete"
                    title="Delete User"
                    description="Are you sure you want to delete this user?"
                    cancelLabel="Cancel"
                  />
                }
                // Add Vehicle Profile
                extraActions={
                  <SideSheet
                    triggerLabel="Add Vehicle"
                    title="Add Vehicle Profile"
                    description="Add Vehicle Profile details and click Add Vehicle when done."
                    body={
                      <VehicleForm
                        formAction={addVehicle}
                        formValidation={AddVehicleFormSchema}
                        buttonText="Add Vehicle"
                      />
                    }
                  />
                }
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
                  {roles}
                </Badge>
              </div>
            </div>
          </div>
          <div className="col-span-3 rounded-[14px] bg-white p-4 ">
            <div className="flex flex-row justify-between items-start ">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Vehicles
                </h3>
                <p className="text-sm text-muted-foreground mt-0">
                  Click to view details
                </p>
              </div>
              <IconDropdownMenu
                label="Vehicle Menu"
                editAction={
                  <SideSheet
                    triggerLabel="Edit"
                    title="Edit Vehicle Profile"
                    description="Edit Vehicle Profile details and click Save when done."
                    actionLabel="Save Profile"
                    body={
                      <VehicleForm
                        vehicle={selectedVehicle || vehicles[0]}
                        formAction={editVehicle}
                        formValidation={EditVehicleFormSchema}
                        buttonText="Save"
                      />
                    }
                  />
                }
                deleteAction={
                  <AlertDialogComponent
                    actionLabel="Delete"
                    triggerLabel="Delete"
                    title="Delete Vehicle"
                    description="Are you sure you want to delete this vehicle?"
                    cancelLabel="Cancel"
                    onClick={() =>
                      removeVehicle(
                        selectedVehicle ? selectedVehicle.id : vehicles[0].id
                      )
                    }
                  />
                }
              />
            </div>
            <ScrollArea className="relative max-w-[620px]">
              <RadioGroup
                className="flex flex-row justify-center space-x-4 mt-4"
                defaultValue={vehicles[0]}
                // value={selectedVehicle}
                onValueChange={(value) => handleSelectVehicle(value)}
              >
                {vehicles.map((vehicle) => (
                  <div key={vehicle.registrationNumber} className="mb-4">
                    <RadioGroupItem
                      id={vehicle.registrationNumber}
                      value={vehicle}
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
          <AppointmentCard appointments={appointments} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
