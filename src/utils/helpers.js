import { format } from 'date-fns';

export const avatarFallback = (name) => {
  const nameArray = name.split(' ');
  const initials = nameArray.map((name) => name[0]).join('');
  return initials.toUpperCase();
};

export const commaSeparatedArray = (array) => {
  if (!array) return '---';

  if (array.length === 1) {
    return array[0];
  }

  return array.join(', ');
};

// format data array and return array of given length
export const formatDataArray = (array, length) => {
  if (!array) return [];

  if (array.length === 1) {
    return array;
  }

  const newArray = array.slice(0, length);

  return newArray;
};

export const statusColor = (status) => {
  switch (status) {
    case 'Pending':
      return 'bg-orange-100 text-orange-400 border-orange-400';
    case 'In-Progress':
      return 'bg-blue-100 text-blue-400 border-blue-400';
    case 'Canceled':
      return 'bg-red-100 text-red-400 border-red-400';
    case 'Ready':
      return 'bg-purple-100 text-purple-400 border-purple-400';
    case 'Completed':
      return 'bg-green-100 text-green-400 border-green-400';
    default:
      return 'bg-destructive';
  }
};

export const inventoryStatusColor = (status) => {
  switch (status) {
    case 'Out of Stock':
      return 'bg-red-100 text-red-400 border-red-400';
    case 'Low Stock':
      return 'bg-orange-100 text-orange-400 border-orange-400';
    case 'In Stock':
      return 'bg-green-100 text-green-400 border-green-400';
    default:
      return 'bg-destructive';
  }
};

export const rolesColor = (role) => {
  switch (role) {
    case 'User':
      return 'bg-green-100 text-green-400 border-green-400';
    case 'Admin':
      return 'bg-blue-100 text-blue-400 border-blue-400';
    case 'Super Admin':
      return 'bg-purple-100 text-purple-400 border-purple-400';
    default:
      return 'bg-destructive';
  }
};

export const generateTimeOptions = () => {
  const options = [];
  const startTime = 8 * 60; // 8 am in minutes
  const endTime = 17 * 60; // 5 pm in minutes
  const interval = 30; // 30-minute interval

  for (let time = startTime; time <= endTime; time += interval) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
    options.push({ label: formattedTime, value: formattedTime });
  }

  return options;
};

export const getVehicles = (vehiclesData) =>
  vehiclesData.map((vehicle) => ({
    label: `${vehicle.make} ${vehicle.model} ${vehicle.year}`,
    value: `${vehicle.make} ${vehicle.model} ${vehicle.year}`,
    id: vehicle.id
  }));

export const getServices = (servicesData) =>
  servicesData.map((service) => ({
    label: service.name,
    value: service.name,
    id: service.id,
    price: service.price
  }));

export const getInventories = (inventoriesData) =>
  inventoriesData.map((inventory) => ({
    label: inventory.name,
    value: inventory.name,
    id: inventory.id,
    price: inventory.finalPrice
  }));

const servicesMap = new Map();

export const findServiceName = (serviceId, servicesData) => {
  if (!servicesMap.has(serviceId)) {
    const service = servicesData.find((service) => service.id === serviceId);
    servicesMap.set(serviceId, service?.name ?? null);
  }
  return servicesMap.get(serviceId);
};

export const findVehicleInfo = (vehicleId, allVehiclesData) => {
  return allVehiclesData.find((vehicle) => vehicle.id === vehicleId);
};

export const getDate = (date) => {
  return format(new Date(date), 'dd MMM yyyy');
};

export const generateDurationOptions = (minMinutes, maxMinutes, step) => {
  const durationOptions = [];

  for (let minutes = minMinutes; minutes <= maxMinutes; minutes += step) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const label =
      hours > 0
        ? `${hours} hour${hours > 1 ? 's' : ''}${
            remainingMinutes > 0 ? ` ${remainingMinutes} minutes` : ''
          }`
        : `${remainingMinutes} minutes`;

    durationOptions.push({ label, value: minutes });
  }

  return durationOptions;
};

export const getDurationLabel = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''}${
      remainingMinutes > 0 ? ` ${remainingMinutes} minutes` : ''
    }`;
  } else {
    return `${remainingMinutes} minute${remainingMinutes !== 1 ? 's' : ''}`;
  }
};

export const formattedNumber = (number) =>
  number.toLocaleString('en-US', {
    minimumFractionDigits: 2
  });
