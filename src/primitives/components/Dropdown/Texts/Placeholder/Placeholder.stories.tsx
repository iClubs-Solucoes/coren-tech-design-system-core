import { Meta, StoryFn } from '@storybook/react';

import { Placeholder } from './Placeholder';

export default {
  Placeholder: 'Primitives/Dropdown/components/Texts/Placeholder',
  component: Placeholder,
} as Meta<typeof Placeholder>;

const Template: StoryFn<typeof Placeholder> = function Template(args) {
  return <Placeholder {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Placeholder',
};
