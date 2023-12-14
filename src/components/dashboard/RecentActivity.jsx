import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { avatarFallback } from '@/utils/helpers';

const RecentActivity = ({ name, description, avatar, value }) => {
  return (
    <div className="space-y-8 py-2">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>{avatarFallback(name)}</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{name}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="ml-auto font-medium">{value}</div>
      </div>
    </div>
  );
};

export default RecentActivity;
