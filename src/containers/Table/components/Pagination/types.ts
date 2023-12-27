export type PaginationProps = {
  pageSelect?: number;
  byPage: number;
  max: number;
  onChange?: (page: number) => void;
} & PaginationStyleProps;

export type PaginationStyleProps = {
  disabled?: boolean;
};
