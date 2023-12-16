import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProfileCard = ({ title, children, className, props }) => {
  return (
    <Card className={className} {...props}>
      <CardHeader className="flex flex-row pb-2">
        <CardTitle className="font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ProfileCard;
