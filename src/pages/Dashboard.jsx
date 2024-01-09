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
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/Separator';
import Image from '@/components/image/Image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { avatarFallback } from '@/utils/helpers';
import { Link } from 'react-router-dom';
import ButtonLink from '@/components/button/ButtonLink';
import { useUserValue } from '@/context/UserContext';

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

const recentActivityData = [
  {
    id: 1,
    service: 'oil change',
    status: 'in-progress',
    date: '12/12/2021'
  },
  {
    id: 2,
    service: 'tyre change',
    status: 'completed',
    date: '12/12/2021'
  },
  {
    id: 3,
    service: 'cooling system',
    status: 'approved',
    date: '12/12/2021'
  },
  {
    id: 4,
    service: 'wheel alignment',
    status: 'completed',
    date: '12/12/2021'
  },
  {
    id: 5,
    service: 'oil change',
    status: 'completed',
    date: '12/12/2021'
  }
];

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

const appointmentData = [
  {
    id: 1,
    date: '2023-12-07T10:20:56.268Z',
    time: '8:00',
    note: 'Urgent fix',
    services: ['oil change', 'tyre change'],
    status: { value: 'Completed', label: 'Completed' },
    createdAt: '12/12/2021'
  },
  {
    id: 2,
    date: '2023-12-08T10:20:56.268Z',
    time: '9:00',
    note: 'Change oil',
    services: ['oil change', 'tyre change'],
    status: { value: 'Pending', label: 'Pending' },
    createdAt: '12/12/2022'
  },
  {
    id: 3,
    date: '2023-11-07T10:20:56.268Z',
    time: '10:00',
    note: 'Fix the issues',
    services: ['steering fix', 'tyre change'],
    status: { value: 'Canceled', label: 'Canceled' },
    createdAt: '12/12/2023'
  }
];

const Dashboard = () => {
  const user = useUserValue();

  return (
    <div className="space-y-4">
      <div className="flex flex-row justify-between">
        <h3 className="font-bold text-gray-700">
          Welcome back, {user.firstName}
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
          <div className="flex flex-row justify-between">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>
                You made {recentActivityData.length} activities this month.
              </CardDescription>
            </CardHeader>
            <ButtonLink to="/activities" className="mt-4 mr-4">
              View all
            </ButtonLink>
          </div>
          <CardContent>
            {recentActivityData.map((activity) => (
              <div className="space-y-8 py-2" key={activity.id}>
                <div className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>
                      {avatarFallback(activity.service)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.service}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.status}
                    </p>
                  </div>
                  <div className="ml-auto font-medium">{activity.date}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-8">
        <AppointmentCard appointments={appointmentData} />
        <Card className="col-span-4">
          <CardHeader>
            <div className="flex flex-row justify-between items-start">
              <div>
                <CardTitle>Vehicle</CardTitle>
                <CardDescription>Details and overview.</CardDescription>
              </div>
              <ButtonLink to="/profile">View all</ButtonLink>
            </div>
            <Separator className="my-4" />
          </CardHeader>
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
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
