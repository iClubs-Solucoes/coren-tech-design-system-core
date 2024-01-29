import { useArgs } from '@storybook/preview-api';
import { Meta, StoryFn } from '@storybook/react';

import { Textarea } from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as Meta<typeof Textarea>;

const Template: StoryFn<typeof Textarea> = function Template(args) {
  const [props, updateArgs] = useArgs();

  const handleChange = (value?: string) => {
    updateArgs({
      ...props,
      value,
    });
  };
  return <Textarea {...args} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  value: '',
  disabled: false,
  placeholder: 'placeholder',
  label: 'Titulo',
};
