import { useCallback, useEffect, useMemo, useState } from 'react';

import { KeyboardArrowRightIcon } from 'common/assets/icons';
import { Dropdown } from 'primitives';

import * as S from './styles';
import { PaginationProps } from './types';

export function Pagination({
  pageSelect = 0,
  max,
  byPage,
  disabled,
  onChange,
}: PaginationProps) {
  const [pageNow, setPageNow] = useState(pageSelect);

  const maxPages = useMemo(() => {
    if (byPage === 0 || max === byPage) return 0;

    const pages = Math.trunc(max / byPage);

    return pages;
  }, [max, byPage]);

  const handlePrevious = useCallback(() => {
    if (pageNow === 0) {
      setPageNow(maxPages);
      onChange?.(maxPages);
      return;
    }

    setPageNow(pageNow - 1);
    onChange?.(pageNow - 1);
  }, [pageNow, maxPages, max, byPage, onChange]);

  const handleNext = useCallback(() => {
    if (pageNow === maxPages) {
      setPageNow(0);
      onChange?.(0);
      return;
    }

    setPageNow(pageNow + 1);
    onChange?.(pageNow + 1);
  }, [pageNow, maxPages, max, byPage, onChange]);

  useEffect(() => {
    setPageNow(pageSelect);
  }, [pageSelect]);

  return (
    <S.Container disabled={disabled}>
      <S.ButtonPagination
        data-testid="arrow-left-pagination-test"
        onClick={handlePrevious}
        disabledBtn={disabled}
      >
        <Dropdown.Arrow icon={<KeyboardArrowRightIcon />} direction="top" />
      </S.ButtonPagination>
      <S.Page>{pageNow + 1}</S.Page>
      <S.ButtonPagination
        data-testid="arrow-right-pagination-test"
        onClick={handleNext}
        disabledBtn={disabled}
      >
        <Dropdown.Arrow icon={<KeyboardArrowRightIcon />} direction="bottom" />
      </S.ButtonPagination>
    </S.Container>
  );
}
