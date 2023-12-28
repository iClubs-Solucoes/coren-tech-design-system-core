import { Meta, StoryFn } from '@storybook/react';
import { ScrollProvider } from 'hooks';

import { Navbar } from './Navbar';

export default {
  title: 'Primitives/Navbar',
  component: Navbar,
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = function Template(args) {
  return (
    <ScrollProvider>
      <Navbar {...args}>Container inside Navbar</Navbar>
    </ScrollProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: true,
};
