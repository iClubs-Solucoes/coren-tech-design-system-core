import { Meta, StoryFn } from '@storybook/react';

import { Step } from './types';
import { Wizard } from './Wizard';

export default {
  title: 'Containers/Wizard',
  component: Wizard,
} as Meta<typeof Wizard>;

const Template: StoryFn<typeof Wizard> = function Template(args) {
  return <Wizard {...args} />;
};

const steps: Step[] = [
  {
    name: 'Novo picolé',
    children: <p style={{ backgroundColor: 'red' }}>123</p>,
    onClick: () => console.log('Going to next step'),
  },
  {
    name: 'Escolha o sabor',
    children: <p style={{ backgroundColor: 'pink' }}>456</p>,
    onClick: () => console.log('Going to next step'),
  },
  {
    name: 'Escolha a embalagem',
    children: <p style={{ backgroundColor: 'blue' }}>789</p>,
    onClick: () => console.log('Going to next step'),
  },
  {
    name: 'Escolha o palito',
    children: <p style={{ backgroundColor: 'yellow' }}>1011</p>,
    onClick: () => console.log('Going to next step'),
  },
];

export const Default = Template.bind({});

Default.args = {
  steps: steps,
};
