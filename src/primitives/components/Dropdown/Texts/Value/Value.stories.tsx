import { Meta, StoryFn } from '@storybook/react';

import { Value } from './Value';

export default {
  Value: 'Primitives/Dropdown/components/Texts/Value',
  component: Value,
} as Meta<typeof Value>;

const Template: StoryFn<typeof Value> = function Template(args) {
  return <Value {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Valor',
};
