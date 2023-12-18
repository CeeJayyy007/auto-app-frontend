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
      return 'bg-warning';
    case 'approved':
      return 'bg-primary';
    case 'canceled':
      return 'bg-destructive';
    case 'completed':
      return 'bg-blue-500';
    default:
      return 'bg-destructive';
  }
};
