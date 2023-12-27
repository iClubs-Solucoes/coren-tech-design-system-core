import { Meta, StoryFn } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = function Template(args) {
  return <Input {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
