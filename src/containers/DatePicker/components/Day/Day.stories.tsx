import { Meta, StoryFn } from '@storybook/react';

import { Day } from './Day';

export default {
  title: 'Containers/DatePicker/components/Day',
  component: Day,
} as Meta<typeof Day>;

const Template: StoryFn<typeof Day> = function Template(args) {
  return <Day {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  day: 1,
};
