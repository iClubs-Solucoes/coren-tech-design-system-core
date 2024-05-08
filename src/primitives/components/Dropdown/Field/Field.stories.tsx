import { Meta, StoryFn } from '@storybook/react';

import { Field } from './Field';

export default {
  title: 'Primitives/Dropdown/components/Field',
  component: Field,
} as Meta<typeof Field>;

const Template: StoryFn<typeof Field> = function Template(args) {
  return <Field {...args}>Hello Storybook</Field>;
};

export const Default = Template.bind({});
Default.args = {};

export const PrimaryTheme = Template.bind({});
PrimaryTheme.args = {
  fieldTheme: 'primary',
};

export const SecondaryTheme = Template.bind({});
SecondaryTheme.args = {
  fieldTheme: 'secondary',
};

export const ThirdTheme = Template.bind({});
ThirdTheme.args = {
  fieldTheme: 'third',
};

export const SelectTheme = Template.bind({});
SelectTheme.args = {
  fieldTheme: 'select',
};

export const FieldTheme = Template.bind({});
FieldTheme.args = {
  fieldTheme: 'field',
};
