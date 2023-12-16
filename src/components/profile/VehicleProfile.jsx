import ProfileCard from './ProfileCard';
import ProfileDropdownMenu from './ProfileDropdownMenu';

const vehicleData = [
  {
    id: 1,
    make: 'Lamborghini',
    model: 'Aventador',
    year: '2022',
    registrationNumber: 'KBC 123C',
    image: '/src/assets/lambo.jpeg'
  },
  {
    id: 2,
    make: 'Mercedes',
    model: 'Benz',
    year: '2021',
    registrationNumber: 'KBC 123A',
    image: '/src/assets/benz.jpeg'
  }
];

const VehicleProfile = () => {
  return (
    <div className="flex flex-col space-y-4 md:col-span-3">
      {vehicleData.map((vehicle) => (
        <ProfileCard key={vehicle.registrationNumber}>
          <div className="flex items-start justify-between">
            <div>
              <h4 className="mt-2 font-medium leading-none">
                {vehicle.make} {vehicle.model} {' | '} {vehicle.year}
              </h4>
              <p className="text-sm text-muted-foreground mt-0 py-2">
                License Plate: {vehicle.registrationNumber}
              </p>
            </div>
            <ProfileDropdownMenu label="Vehicle Profile" />
          </div>
          <img src={vehicle.image} alt={vehicle.make} className="rounded-lg" />
        </ProfileCard>
      ))}
    </div>
  );
};

export default VehicleProfile;
