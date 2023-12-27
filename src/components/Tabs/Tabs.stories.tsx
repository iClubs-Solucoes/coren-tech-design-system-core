import { Meta, StoryFn } from '@storybook/react';

import { Tabs } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = function Template(args) {
  return <Tabs {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  filter: 'Todos',
  iconFilter: 'Todos',
  filters: ['Todos', 'Pendente', 'Em análise', 'Analisado'],
  onChange() {},
};
