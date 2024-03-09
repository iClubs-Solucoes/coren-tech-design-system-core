import { Meta, StoryFn } from '@storybook/react';

import { Title } from './Title';

export default {
  title: 'Components/Title',
  component: Title,
} as Meta<typeof Title>;

const Template: StoryFn<typeof Title> = function Template(args) {
  return <Title {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  text: 'Título',
};
