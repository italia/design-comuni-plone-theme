import { v4 as uuid } from 'uuid';

export const cloneBlock = (blockData) => {
  const blockID = uuid();
  const clonedData = { ...blockData, block: blockID };
  return [blockID, clonedData];
};
