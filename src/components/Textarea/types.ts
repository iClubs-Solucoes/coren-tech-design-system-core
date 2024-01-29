export type TextareaProps = {
  value?: string;
  label?: string;
  placeholder?: string;
  onChange?: (value?: string) => void;
} & TextareaStyleProps;

export type TextareaStyleProps = {
  disabled?: boolean;
};
