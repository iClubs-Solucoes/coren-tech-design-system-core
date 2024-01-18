import { Meta, StoryFn } from '@storybook/react';

import { ProgressBar } from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
} as Meta<typeof ProgressBar>;

const Template: StoryFn<typeof ProgressBar> = function Template(args) {
  return <ProgressBar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  progress: 50,
};
