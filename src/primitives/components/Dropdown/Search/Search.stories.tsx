import { useArgs } from '@storybook/preview-api';
import { Meta, StoryFn } from '@storybook/react';

import { Search } from './Search';

export default {
  title: 'Primitives/Dropdown/components/Search',
  component: Search,
} as Meta<typeof Search>;

const Template: StoryFn<typeof Search> = function Template(args) {
  const [props, updateArgs] = useArgs();

  const handleChange = (value?: string) => {
    updateArgs({
      ...props,
      value,
    });
  };

  return <Search {...args} {...props} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Pesquisar',
};
