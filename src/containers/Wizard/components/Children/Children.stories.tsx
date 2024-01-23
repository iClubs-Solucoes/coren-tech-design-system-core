import { Meta, StoryFn } from '@storybook/react';

import { Children } from './Children';

export default {
  title: 'Containers/Wizard/components/Children',
  component: Children,
} as Meta<typeof Children>;

const Template: StoryFn<typeof Children> = function Template(args) {
  return <Children {...args} />;
};

export const CurrentChildren = Template.bind({});
CurrentChildren.args = {
  currentChildren: true,
  children: <h1>Children</h1>,
};

export const NextChildren = Template.bind({});
NextChildren.args = {
  currentChildren: false,
  children: <h1>Not been displayed Children</h1>,
};
