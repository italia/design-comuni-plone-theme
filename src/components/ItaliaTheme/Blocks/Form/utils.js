export const getFieldName = (label) => {
  return label?.toLowerCase().replace(/[^a-zA-Z0-9]/g, '_');
};
