import { Meta, StoryFn } from '@storybook/react';

import { Bold } from './Bold';

export default {
  title: 'Primitives/Sections/Section/Bold',
  component: Bold,
} as Meta<typeof Bold>;

const Template: StoryFn<typeof Bold> = function Template(args) {
  return <Bold {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Texto em negrito',
};
