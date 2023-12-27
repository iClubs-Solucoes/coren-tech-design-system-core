import { Meta, StoryFn } from '@storybook/react';

import { Select } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = function Template(args) {
  return <Select {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  values: {
    value: 'Analisado',
    label: 'Analisado',
  },
  items: [
    {
      value:
        'Pendeante Pendeante Pendeante Pendeante Pendeante Pendeante Pendeante',
      label:
        'Pendeante Pendeante Pendeante Pendeante Pendeante Pendeante Pendeante',
    },
    {
      value:
        'Em análise Em análise Em análise Em análise Em análise Em análise',
      label:
        'Em análise Em análise Em análise Em análise Em análise Em análise',
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
