import { Meta, StoryFn } from '@storybook/react';

import { Switch } from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
} as Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = function Template(args) {
  return <Switch {...args} />;
};

export const OnTheme = Template.bind({});
OnTheme.args = {
  checked: true,
  littleBall: true,
  icon: true,
  disabled: true,
  label: {
    text: 'Abc d',
    position: 'pos',
  },
  onClick() {
    console.log('123');
  },
};

export const OffTheme = Template.bind({});
OffTheme.args = {
  checked: false,
};
