export const getIcon = (type) => {
  switch (type) {
    case 'News Item':
      return 'it-note';
    case 'Event':
      return 'it-calendar';
    default:
      return 'it-note';
  }
};
