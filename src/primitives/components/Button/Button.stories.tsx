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

export const SecondaryTheme = Template.bind({});
SecondaryTheme.args = { buttonTheme: 'secondary' };

export const ThirdTheme = Template.bind({});
ThirdTheme.args = {
  buttonTheme: 'third',
};

export const FourthTheme = Template.bind({});
FourthTheme.args = {
  buttonTheme: 'fourth',
};

export const FifthTheme = Template.bind({});
FifthTheme.args = {
  buttonTheme: 'fifth',
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

const LoadingTemplate: StoryFn<typeof Button> = function LoadingTemplate(args) {
  return <Button {...args}></Button>;
};

export const Loading = LoadingTemplate.bind({});
Loading.args = {
  buttonTheme: 'third',
  loading: true,
};
