import DashboardCard from '@/components/dashboard/DashboardCard';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import Charts from '@/components/dashboard/DashboardChart';
import getIcon from '@/components/icons/getIcon';
import RecentActivity from '@/components/dashboard/RecentActivity';
import VehicleCard from '@/components/dashboard/VehicleCard';

const dashboardCardContent = [
  {
    id: 1,
    title: 'Total Spend',
    icon: getIcon({ name: 'cart' }),
    content: 'N 1000',
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
    date: '12/12/2021',
    avatar: 'OC'
  },
  {
    id: 2,
    service: 'tyre change',
    status: 'completed',
    date: '12/12/2021',
    avatar: 'OC'
  },
  {
    id: 3,
    service: 'cooling system',
    status: 'approved',
    date: '12/12/2021',
    avatar: 'OC'
  },
  {
    id: 4,
    service: 'wheel alignment',
    status: 'completed',
    date: '12/12/2021',
    avatar: 'OC'
  },
  {
    id: 5,
    service: 'oil change',
    status: 'completed',
    date: '12/12/2021',
    avatar: 'OC'
  }
];

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {dashboardCardContent.map((card) => (
          <DashboardCard key={card.title} {...card} className={card.bg} />
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
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>
              You made {recentActivityData.length} activities this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {recentActivityData.map((activity) => (
              <RecentActivity
                key={activity.id}
                name={activity.service}
                description={activity.status}
                value={activity.date}
                avatar={activity.avatar}
              />
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-8">
        <VehicleCard />
        <VehicleCard />
      </div>
    </div>
  );
};

export default Dashboard;
