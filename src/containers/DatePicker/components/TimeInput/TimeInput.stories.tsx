import { useArgs } from '@storybook/preview-api';
import { Meta, StoryFn } from '@storybook/react';

import { TimeInput } from './TimeInput';

export default {
  title: 'Containers/DatePicker/components/TimeInput',
  component: TimeInput,
} as Meta<typeof TimeInput>;

const Template: StoryFn<typeof TimeInput> = function Template(args) {
  const [props, updateArgs] = useArgs();

  const handleTimeChange = (time: string) => {
    updateArgs({ ...props, value: time });
  };

  return <TimeInput {...args} {...props} onChange={handleTimeChange} />;
};

export const Default = Template.bind({});
Default.args = {};
