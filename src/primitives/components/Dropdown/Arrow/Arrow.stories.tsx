import { Meta, StoryFn } from '@storybook/react';

import { Arrow } from './Arrow';

export default {
  title: 'Primitives/Dropdown/components/Arrow',
  component: Arrow,
} as Meta<typeof Arrow>;

const Template: StoryFn<typeof Arrow> = function Template(args) {
  return <Arrow {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
