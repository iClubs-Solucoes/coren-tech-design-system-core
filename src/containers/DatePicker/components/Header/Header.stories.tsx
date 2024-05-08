import { Meta, StoryFn } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Containers/DatePicker/components/Header',
  component: Header,
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = function Template(args) {
  return <Header {...args} />;
};

const now = new Date();
const currentYear = now.getFullYear();

export const Default = Template.bind({});
Default.args = {
  date: now,
  dropdownYears: [
    currentYear,
    currentYear + 1,
    currentYear + 2,
    currentYear + 3,
    currentYear + 4,
    currentYear + 5,
  ],
};
