import { Meta, StoryFn } from '@storybook/react';

import { DatePicker } from './DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
} as Meta<typeof DatePicker>;

const Template: StoryFn<typeof DatePicker> = function Template(args) {
  return <DatePicker {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
