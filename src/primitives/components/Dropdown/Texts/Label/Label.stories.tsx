import { Meta, StoryFn } from '@storybook/react';

import { Label } from './Label';

export default {
  Label: 'Primitives/Dropdown/components/Texts/Label',
  component: Label,
} as Meta<typeof Label>;

const Template: StoryFn<typeof Label> = function Template(args) {
  return <Label {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Título',
};
