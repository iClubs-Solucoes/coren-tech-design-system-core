import { Meta, StoryFn } from '@storybook/react';

import { Pagination } from './Pagination';

export default {
  title: 'Containers/Table/components/Pagination',
  component: Pagination,
} as Meta<typeof Pagination>;

const Template: StoryFn<typeof Pagination> = function Template(args) {
  return <Pagination {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  pageSelect: 5,
  max: 59,
  byPage: 8,
  disabled: false,
};
