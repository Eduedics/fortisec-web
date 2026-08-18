export const getCurrentYear = () => new Date().getFullYear();

export const formatPhone = (phone) => {
  if (!phone) return '';
  return phone.replace(/\s/g, '');
};

export const truncate = (text, maxLength = 100) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};