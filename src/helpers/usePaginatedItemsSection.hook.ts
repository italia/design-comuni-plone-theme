import { useState, useMemo } from 'react';
import type { IntlShape } from 'react-intl';

interface usePaginatedItemsSectionProps {
  data: Array<any> | null | undefined;
  bSize?: number;
}

type ActivePage = {
  active: boolean;
  type: 'pageItem' | string;
  ellipsisItem: '...' | string | null | undefined;
  isPrevButtonInactive: boolean;
  isForwButtonInactive: boolean;
  children: number;
  intl: IntlShape;
};

type PaginationFunctionExtraArgs = {
  activePage: ActivePage;
  onClick: (
    e: MouseEvent | KeyboardEvent,
    obj: PaginationFunctionExtraArgs,
  ) => void;
};

export const DEFAULT_PAGINATED_CARDS_SECTION_BSIZE = 4;

function getBatches(
  arr: usePaginatedItemsSectionProps['data'],
  batchSize: number,
): any[][] {
  const batches = [];
  if (arr) {
    for (let i = 0; i < arr.length; i += batchSize) {
      batches.push(arr.slice(i, i + batchSize));
    }
  }
  return batches;
}

export function usePaginatedItemsSection({
  data,
  bSize = DEFAULT_PAGINATED_CARDS_SECTION_BSIZE,
}: usePaginatedItemsSectionProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const pageNumbers = data ? Math.ceil(data.length / bSize) : 0;

  const onPaginationChange = (
    _e: MouseEvent | KeyboardEvent,
    { activePage }: PaginationFunctionExtraArgs,
  ) => {
    const current = activePage?.children ?? 1;
    setCurrentPage(current);
  };
  const batches: Array<any> = useMemo(() => {
    const currentIndex = currentPage - 1;
    return getBatches(data, bSize)[currentIndex];
  }, [data, bSize, currentPage]);

  return { batches, currentPage, onPaginationChange, pageNumbers };
}
