export type DayProps = {
  className?: string;
  dayDate?: Date;
  monthDisplayedDate: Date;
  day: number;
  disabled?: boolean;
  selected?: boolean;
};

export type DayContainerStyleProps = {
  notCurrentMonthDay?: boolean;
  disabled?: boolean;
  selected?: boolean;
};
