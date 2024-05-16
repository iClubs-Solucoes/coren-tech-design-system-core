import { Meta, StoryFn } from '@storybook/react';

import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = function Template(args) {
  return <Badge {...args}>Hello Storybook</Badge>;
};

export const PrimaryTheme = Template.bind({});
PrimaryTheme.args = {};

export const SecondaryTheme = Template.bind({});
SecondaryTheme.args = {
  badgeTheme: 'secondary',
};

export const ThirdTheme = Template.bind({});
ThirdTheme.args = {
  badgeTheme: 'third',
};

export const FourthTheme = Template.bind({});
FourthTheme.args = {
  badgeTheme: 'fourth',
};
