import { Meta, StoryFn } from '@storybook/react';

import { Criteria } from './Criteria';

export default {
  title: 'Primitives/Criteria',
  component: Criteria,
} as Meta<typeof Criteria>;

const Template: StoryFn<typeof Criteria> = function Template(args) {
  return <Criteria {...args} />;
};

export const Satisfied = Template.bind({});
Satisfied.args = {
  satisfactionRule: true,
  text: 'Critério satisfeito!',
};

export const NotSatisfied = Template.bind({});
NotSatisfied.args = {
  satisfactionRule: false,
  text: 'Critério não satisfeito!',
};

export const NotSatisfiedWithError = Template.bind({});
NotSatisfiedWithError.args = {
  satisfactionRule: false,
  text: 'Critério não satisfeito!',
  displayError: true,
};
