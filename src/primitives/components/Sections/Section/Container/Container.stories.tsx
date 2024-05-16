import { Meta, StoryFn } from '@storybook/react';

import { Container } from './Container';

export default {
  title: 'Primitives/Sections/Section/Container',
  component: Container,
} as Meta<typeof Container>;

const Template: StoryFn<typeof Container> = function Template(args) {
  return <Container {...args}>Section Container</Container>;
};

export const Default = Template.bind({});
