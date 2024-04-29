import { Meta, StoryFn } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Containers/DatePicker/components/Header',
  component: Header,
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = function Template(args) {
  return <Header {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
