import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UserCard = ({ children, className, props }) => {
  return (
    <Card className={className} {...props}>
      <CardHeader className="flex flex-row pb-2"></CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default UserCard;
