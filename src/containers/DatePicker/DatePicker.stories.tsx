import { useArgs } from '@storybook/preview-api';
import { Meta, StoryFn } from '@storybook/react';

import { DatePicker } from './DatePicker';

export default {
  title: 'Containers/DatePicker',
  component: DatePicker,
} as Meta<typeof DatePicker>;

const Template: StoryFn<typeof DatePicker> = function Template(args) {
  const [props, updateArgs] = useArgs();

  const handleDateChange = (selectedDate: Date) => {
    console.log('Data selecionada:');
    console.log(selectedDate);
    updateArgs({ ...props, selectedDate });
  };

  return <DatePicker {...args} {...props} setSelectedDate={handleDateChange} />;
};

export const Default = Template.bind({});
Default.args = {
  openingTrigger: <p>Abra o DatePicker</p>,
};
