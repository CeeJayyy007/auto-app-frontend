export const avatarFallback = (name) => {
  const nameArray = name.split(' ');
  const initials = nameArray.map((name) => name[0]).join('');
  return initials.toUpperCase();
};
