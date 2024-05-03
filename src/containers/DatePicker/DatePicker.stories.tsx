import { useArgs } from '@storybook/preview-api';
import { Meta, StoryFn } from '@storybook/react';
import { DATE_FORMATS } from 'common/enumerators';
import { formatDate, range } from 'common/utils';

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

    const inputValue = formatDate(
      selectedDate,
      DATE_FORMATS.DAY_MONTH_4DIGITS_YEAR_AT_24SYSTEM_HOUR_MINUTES,
    );

    updateArgs({ ...props, selectedDate, inputValue });
  };

  return <DatePicker {...args} {...props} onChange={handleDateChange} />;
};

const now = new Date();

const currentYear = now.getFullYear();
const currentMonth = now.getMonth();
const currentDay = now.getDay();

const yearInTwoYears = currentYear + 2;

const twoYearsFromNow = new Date(yearInTwoYears, currentMonth, currentDay);

export const Default = Template.bind({});
Default.args = {
  // input: <h1>AAAAAAAAA</h1>,
  inputLabel: 'Data e horário de início*',
  inputPlaceholder: 'DD/MM/AAAA às 00:00',
  minDate: now,
  maxDate: twoYearsFromNow,
  dropdownYears: range(currentYear, yearInTwoYears),
  timeInput: true,
};
