import { Meta, StoryFn } from '@storybook/react';

import { TextField } from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta<typeof TextField>;

const Template: StoryFn<typeof TextField> = function Template(args) {
  return <TextField {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Pontos',
  placeholder: 'Atribua o valor',
  labelErr: 'Campo obrigatório',
  error: true,
};
