import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center h-screen white ">
      <Card className="w-[800px] h-[500px] mt-[100px] place-content-center grid">
        <CardHeader className="text-center">
          <CardTitle className="lg:text-7xl text-4xl">404</CardTitle>
          <CardDescription>
            The page you’re looking for doesn’t exist.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotFound;
