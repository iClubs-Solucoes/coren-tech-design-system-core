import { Meta, StoryFn } from '@storybook/react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = function Template(args) {
  return <Checkbox {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  checked: false,
  label: 'Eu aceito os termos de uso',
};
