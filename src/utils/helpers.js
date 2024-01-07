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
    case 'ready':
      return 'bg-purple-100 text-purple-400 border-purple-400';
    case 'Completed':
      return 'bg-green-100 text-green-400 border-green-400';
    default:
      return 'bg-destructive';
  }
};

export const inventoryStatusColor = (status) => {
  switch (status) {
    case 'out of stock':
      return 'bg-red-100 text-red-400 border-red-400';
    case 'low stock':
      return 'bg-orange-100 text-orange-400 border-orange-400';
    case 'in stock':
      return 'bg-green-100 text-green-400 border-green-400';
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
    id: service.id
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
