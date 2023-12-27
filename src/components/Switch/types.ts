type Label = {
  text: string;
  position: 'pre' | 'pos';
};

export type SwitchProps = {
  checked: boolean;
  label?: Label;
  offLabel?: Label;
  icon?: boolean;
  onClick?: () => void;
  onTurnOn?: () => void;
  onTurnOff?: () => void;
} & SwitchStyleProps;

export type SwitchStyleProps = {
  littleBall?: boolean;
  disabled?: boolean;
};
