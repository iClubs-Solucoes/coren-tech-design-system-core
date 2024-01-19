import { Meta, StoryFn } from '@storybook/react';

import { Step } from './Step';

export default {
  title: 'Containers/Wizard/components/Step',
  component: Step,
} as Meta<typeof Step>;

const Template: StoryFn<typeof Step> = function Template(args) {
  return <Step {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'Novo picolé',
  preIcon: '1',
  currentStep: true,
  disabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  name: 'Novo picolé',
  preIcon: '1',
  currentStep: true,
  disabled: false,
};
Hover.parameters = { pseudo: { hover: true } };

export const NextStep = Template.bind({});
NextStep.args = {
  name: 'Novo picolé',
  preIcon: '1',
  disabled: false,
  currentStep: false,
};

export const NextStepHover = Template.bind({});
NextStepHover.args = {
  name: 'Novo picolé',
  preIcon: '1',
  currentStep: false,
  disabled: false,
};
NextStepHover.parameters = { pseudo: { hover: true } };
