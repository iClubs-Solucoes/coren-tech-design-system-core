export type CheckboxProps = {
  label?: string;
  onChange?: (checked: boolean) => void;
} & CheckboxStyleProps;

export type CheckboxStyleProps = {
  checked?: boolean;
};
