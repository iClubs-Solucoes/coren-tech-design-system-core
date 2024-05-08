import { Meta, StoryFn } from '@storybook/react';

import { Select } from './Select';
import { SelectProps } from './types';

export default {
  title: 'Components/Selects/Select',
  component: Select,
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = function Template(args) {
  const defaultProps: SelectProps = {
    values: {
      value: 'Analisado',
      label: 'Analisado',
    },
    items: [
      {
        value: 'Pendente',
        label: 'Pendente',
      },
      {
        value: 'Em análise',
        label: 'Em análise',
      },
      {
        value: 'Analisado',
        label: 'Analisado',
      },
    ],
    disabled: false,
    onChange(value) {
      console.log(value);
    },
  };

  return <Select {...defaultProps} {...args} />;
};

export const PrimaryTheme = Template.bind({});
PrimaryTheme.args = {
  selectTheme: 'primary',
};

export const SecondaryTheme = Template.bind({});
SecondaryTheme.args = {
  selectTheme: 'secondary',
};
