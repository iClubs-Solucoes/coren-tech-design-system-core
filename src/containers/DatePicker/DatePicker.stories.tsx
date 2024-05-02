import { useArgs } from '@storybook/preview-api';
import { Meta, StoryFn } from '@storybook/react';
import { range } from 'common/utils';

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

const now = new Date();

const currentYear = now.getFullYear();

const firstDayOfTheYear = new Date(currentYear, 0, 1);
const lastDayOfTheYear = new Date(currentYear, 11, 31);

export const Default = Template.bind({});
Default.args = {
  // openingTrigger: <h1>AAAAAAAAA</h1>,
  minDate: firstDayOfTheYear,
  maxDate: lastDayOfTheYear,
  dropdownYears: range(currentYear, currentYear + 15),
};
