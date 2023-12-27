export type SelectValues = {
  value: string;
  label: string;
}[];

export type SelectProps = {
  values?: SelectValues[0];
  items?: SelectValues;
  onChange?: (value: SelectValues[0]) => void;
  disabled?: boolean;
};
