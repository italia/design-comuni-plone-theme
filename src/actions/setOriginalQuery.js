export const ORIGINAL_QUERY = 'ORIGINAL_QUERY';

export function setOriginalQuery(subrequest, blockId, query) {
  return {
    type: ORIGINAL_QUERY,
    subrequest,
    blockId,
    query,
  };
}
