export type TabsProps = {
  filter?: string;
  iconFilter?: string;
  filters?: string[];
  className?: string;
  disabledFilters?: string[];
  onChange?: (filter: string) => void;
};

export type TabsStyleProps = {
  filters?: number;
  selected?: boolean;
  disabled?: boolean;
};
