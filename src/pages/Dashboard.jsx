import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import Charts from '@/components/dashboard/DashboardChart';
import getIcon from '@/components/icons/getIcon';
import AppointmentCard from '@/components/appointment/AppointmentCard';
import { Separator } from '@/components/ui/Separator';
import Image from '@/components/image/Image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  avatarFallback,
  commaSeparatedArray,
  formatDataArray,
  getDate,
  statusColor
} from '@/utils/helpers';
import ButtonLink from '@/components/button/ButtonLink';
import { useUserValue } from '@/context/UserContext';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import useServices from '@/hooks/useServices';
import useInventory from '@/hooks/useInventory';
import useProfile from '@/hooks/useProfile';
import useAppointment from '@/hooks/useAppointment';
import useActivities from '@/hooks/useActivities';
import { setAppointment } from '@/reducers/appointmentReducers';
import { setActivities } from '@/reducers/activitiesReducers';
import { setService } from '@/reducers/serviceReducers';
import { setInventory } from '@/reducers/inventoryReducers';
import {
  setAllUsers,
  setResult,
  setVehicles
} from '@/reducers/profileReducers';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import EmptyPlaceholder from '@/components/emptyState/EmptyPlaceholder';

const dashboardCardContent = [
  {
    id: 1,
    title: 'Total Spend',
    icon: getIcon({ name: 'cart' }),
    content: '₦ 1000',
    text: 'Last 30 days',
    bg: 'bg-green-50'
  },
  {
    id: 2,
    title: 'Total Services',
    icon: getIcon({ name: 'services' }),
    content: '100',
    text: 'Last 30 days',
    bg: 'bg-blue-50'
  },
  {
    id: 3,
    title: 'Most Frequent Service',
    icon: getIcon({ name: 'flash' }),
    content: '10',
    text: 'Last 30 days',
    bg: 'bg-red-50'
  },
  {
    id: 4,
    title: 'Total Activities',
    icon: getIcon({ name: 'activities' }),
    content: '50',
    text: 'Last 30 days',
    bg: 'bg-purple-50'
  }
];

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useUserValue();
  const { allServices } = useServices();
  const { allInventory } = useInventory();
  const { result, allUsers, allVehicles } = useProfile();
  const { activitiesByUser } = useActivities();
  const { appointmentsDetails } = useAppointment();

  useEffect(() => {
    dispatch(setAppointment(appointmentsDetails?.data));
    dispatch(setActivities(activitiesByUser?.data));
    dispatch(setService(allServices?.data));
    dispatch(setInventory(allInventory?.data));
    dispatch(setAllUsers(allUsers?.data));
    dispatch(setResult(result?.data));
    dispatch(setVehicles(allVehicles?.data));
  }, [
    dispatch,
    result,
    allVehicles,
    activitiesByUser,
    allServices,
    allInventory,
    allUsers,
    appointmentsDetails
  ]);

  const activitiesData = formatDataArray(activitiesByUser?.data, 5);
  const appointmentData = appointmentsDetails?.data;
  const vehiclesData = result?.data?.user[0]?.Vehicles;
  const activitiesDataLength = activitiesByUser?.data?.length;

  console.log('activitiesDatas', vehiclesData);

  return (
    <div className="space-y-4">
      <div className="flex flex-row justify-between">
        <h3 className="font-bold text-gray-700">
          Welcome back, {user?.firstName}
        </h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {dashboardCardContent.map((card) => (
          <Card className={card.bg} key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              {card.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.content}</div>
              <p className="text-xs text-muted-foreground">{card.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Stats</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Charts />
          </CardContent>
        </Card>
        <Card className="col-span-4 md:col-span-3">
          <CardHeader>
            <div className="flex flex-row justify-between items-start">
              <div>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>
                  You made {activitiesDataLength} activities this month.
                </CardDescription>
              </div>
              <ButtonLink to="/activities" className="mr-2">
                {activitiesDataLength === 0 ? 'See More...' : 'View all'}
              </ButtonLink>
            </div>
            <Separator className="my-4" />
          </CardHeader>
          <CardContent>
            {activitiesDataLength === 0 ? (
              <EmptyPlaceholder
                description="No saved activity"
                className="h-[300px]"
              />
            ) : (
              activitiesData?.map((activity) => (
                <div className="space-y-8 py-2" key={activity.id}>
                  <div className="flex items-center">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="/avatars/01.png" alt="Avatar" />
                      <AvatarFallback>
                        {avatarFallback(
                          `${activity?.userDetails?.firstName} ${activity?.userDetails?.lastName}`
                        )}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1 ">
                      <div className="text-sm truncate max-w-[230px]">
                        {activity.note}
                      </div>
                      <div className="text-sm truncate max-w-[230px]">
                        {commaSeparatedArray(activity.services)}
                      </div>
                      <p
                        className={`text-sm text-${statusColor(
                          activity.status
                        )}`}
                      >
                        {activity.status}
                      </p>
                    </div>
                    <div className="ml-auto font-medium text-sm">
                      {getDate(activity.createdAt)}
                    </div>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-8">
        <AppointmentCard
          appointments={appointmentData}
          className="col-span-4"
        />
        <Card className="col-span-4">
          <CardHeader>
            <div className="flex flex-row justify-between items-start">
              <div>
                <CardTitle>Vehicle</CardTitle>
                <CardDescription>Details and overview.</CardDescription>
              </div>
              <ButtonLink to="/profile">
                {vehiclesData?.length === 0 ? 'See More...' : 'View all'}
              </ButtonLink>
            </div>
            <Separator className="my-4" />
          </CardHeader>
          <CardContent>
            {vehiclesData?.length === 0 ? (
              <EmptyPlaceholder
                description="No saved vehicle"
                className="h-[150px]"
              />
            ) : (
              <ScrollArea className="relative max-w-[620px]">
                <div className="flex space-x-8 pb-4">
                  {vehiclesData?.map((vehicle) => (
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
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
