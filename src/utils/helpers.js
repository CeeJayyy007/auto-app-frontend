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
    case 'pending':
      return 'bg-orange-100 text-orange-400 border-orange-400';
    case 'in-progress':
      return 'bg-blue-100 text-blue-400 border-blue-400';
    case 'canceled':
      return 'bg-red-100 text-red-400 border-red-400';
    case 'ready':
      return 'bg-purple-100 text-purple-400 border-purple-400';
    case 'completed':
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
