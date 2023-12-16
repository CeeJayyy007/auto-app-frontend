import UserProfile from '@/components/profile/UserProfile';
import VehicleProfile from '@/components/profile/VehicleProfile';

const Profile = () => {
  return (
    <div className="grid gap-4 md:grid-cols-5">
      <VehicleProfile />
      <UserProfile />
    </div>
  );
};

export default Profile;
