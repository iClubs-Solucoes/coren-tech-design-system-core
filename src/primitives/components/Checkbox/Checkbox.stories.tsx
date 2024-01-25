import { useArgs } from '@storybook/preview-api';
import { Meta, StoryFn } from '@storybook/react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Primitives/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = function Template(args) {
  const [_, updateArgs] = useArgs();

  const handleChange = (checked: boolean) => {
    updateArgs({
      ...args,
      checked,
    });
  };
  return <Checkbox {...args} onChange={handleChange} />;
};

export const Default = Template.bind({});

Default.args = {
  checked: false,
  label: 'Eu aceito os termos de uso',
};
