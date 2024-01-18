import { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

const [checked, setChecked] = useState(false);

const Template: StoryFn<typeof Checkbox> = function Template(args) {
  return <Checkbox {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  checked,
  label: 'Eu aceito os termos de uso',
  onChange: checkedChange => {
    setChecked(checkedChange);
  },
};
