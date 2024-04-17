import { Meta, StoryFn } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'Primitives/Card',
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = function Template(args) {
  return <Card {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: <>Conteúdo do Card</>,
  focus: true,
  hover: false,
};
