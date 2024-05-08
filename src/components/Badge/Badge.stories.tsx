import { Meta, StoryFn } from '@storybook/react';

import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = function Template(args) {
  return <Badge {...args} />;
};

export const PrimaryTheme = Template.bind({});
PrimaryTheme.args = {
  children: 'Hello Storybook',
};

export const SecondaryTheme = Template.bind({});
SecondaryTheme.args = {
  children: 'Hello Storybook',
  badgeTheme: 'secondary',
};
