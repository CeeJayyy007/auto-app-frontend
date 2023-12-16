import { avatarFallback } from '@/utils/helpers';
import UserCard from './UserCard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '../ui/badge';
import ProfileStats from './ProfileStats';
import ProfileDropdownMenu from './ProfileDropdownMenu';

const userData = {
  id: 1,
  firstName: 'John',
  lastName: 'Jackson',
  username: 'johndoe001',
  email: 'johnjackson@mail.com',
  phone: '0712345678',
  role: 'user'
};

const userStatsData = {
  memberSince: '12/12/2020',
  allTimeSpend: 10000,
  totalSpendThisMonth: 1000,
  mostFrequentService: 'oil change'
};

const UserProfile = () => {
  const { firstName, lastName, role, email, phone } = userData;
  return (
    <>
      <UserCard
        title="User profile"
        className="relative flex flex-col md:col-span-2"
      >
        <div className="flex justify-between">
          <h4 className="text-lg font-semibold pt-1">User Details</h4>
          <ProfileDropdownMenu label="User Profile" />
        </div>

        <div className="flex flex-row space-x-4 mt-8 items-center">
          <Avatar className="h-[150px] w-[150px]">
            <AvatarImage src="src/assets/profile.webp" alt="profile-avatar" />
            <AvatarFallback>{avatarFallback('User 1')}</AvatarFallback>
          </Avatar>
          <div className="pl-2">
            <h4 className=" font-bold leading-none">
              {firstName} {lastName}
            </h4>
            <p className="text-sm text-muted-foreground mt-0 py-2">{email}</p>
            <p className="text-sm text-muted-foreground mt-0 py-2">{phone}</p>
            <Badge className="text-sm text-muted-foreground py-0 rounded-full px-4 bg-green-200">
              {role}
            </Badge>
          </div>
        </div>
        <ProfileStats userData={userStatsData} />
      </UserCard>
    </>
  );
};

export default UserProfile;
