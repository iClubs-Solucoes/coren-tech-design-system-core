import { Meta, StoryFn } from '@storybook/react';

import { HourglassLoading } from './HourglassLoading';

export default {
  title: 'Components/Loadings/HourglassLoading',
  component: HourglassLoading,
} as Meta<typeof HourglassLoading>;

const Template: StoryFn<typeof HourglassLoading> = function Template(args) {
  return <HourglassLoading {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  progress: 50,
  text: 'Sua sessão expirou! Estamos redirecionando você para a tela de acesso.',
};
