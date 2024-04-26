import { useArgs } from '@storybook/preview-api';
import { Meta, StoryFn } from '@storybook/react';

import { DatePicker } from './DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
} as Meta<typeof DatePicker>;

const Template: StoryFn<typeof DatePicker> = function Template(args) {
  const [props, updateArgs] = useArgs();

  const handleDateChange = (date: Date) => {
    console.log('Data selecionada:');
    console.log(date);
    updateArgs({ ...props, date });
  };

  return <DatePicker {...args} onChange={handleDateChange} />;
};

export const Default = Template.bind({});
Default.args = {
  date: new Date(),
};
