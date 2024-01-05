import { Meta, StoryFn } from '@storybook/react';
import { SearchIcon } from 'common/assets/icons';

import { Button } from './Button';

export default {
  title: 'Primitives/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = function Template(args) {
  return <Button {...args}>Click me</Button>;
};

export const Default = Template.bind({});
Default.args = {};

export const ThirdTheme = Template.bind({});
ThirdTheme.args = {
  buttonTheme: 'third',
};

export const FourthTheme = Template.bind({});
FourthTheme.args = {
  buttonTheme: 'fourth',
};

export const Icon = Template.bind({});
Icon.args = {
  icon: <SearchIcon />,
  buttonTheme: 'primary',
  onlyIcon: true,
  onClick: () => {
    console.log('test');
  },
  border: true,
};
