import { Meta, StoryFn } from '@storybook/react';

import { Search } from './Search';

export default {
  title: 'Containers/Table/components/Search',
  component: Search,
} as Meta<typeof Search>;

const Template: StoryFn<typeof Search> = function Template(args) {
  return <Search {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contracted: false,
  disabled: false,
  placeholder: 'Digite para pesquisar',
};
