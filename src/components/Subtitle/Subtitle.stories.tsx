import { Meta, StoryFn } from '@storybook/react';

import { Subtitle } from './Subtitle';

export default {
  title: 'Components/Subtitle',
  component: Subtitle,
} as Meta<typeof Subtitle>;

const Template: StoryFn<typeof Subtitle> = function Template(args) {
  return <Subtitle {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  text: 'Subtítulo',
};
