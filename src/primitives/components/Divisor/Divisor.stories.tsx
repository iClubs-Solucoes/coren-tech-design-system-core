import { Meta, StoryFn } from '@storybook/react';

import { Divisor } from './Divisor';

export default {
  title: 'Primitives/Divisor',
  component: Divisor,
} as Meta<typeof Divisor>;

const Template: StoryFn<typeof Divisor> = function Template(args) {
  return <Divisor {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
