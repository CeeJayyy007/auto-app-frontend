export const avatarFallback = (name) => {
  const nameArray = name.split(' ');
  const initials = nameArray.map((name) => name[0]).join('');
  return initials.toUpperCase();
};

export const commaSeparatedArray = (array) => {
  return array.join(', ');
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
