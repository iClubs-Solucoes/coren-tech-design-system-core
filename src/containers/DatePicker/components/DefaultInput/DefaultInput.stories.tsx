import { Meta, StoryFn } from '@storybook/react';
import { DATE_FORMATS } from 'common/enumerators';
import { formatDate } from 'common/utils';

import { DefaultInput } from './DefaultInput';

export default {
  title: 'Containers/DatePicker/components/DefaultInput',
  component: DefaultInput,
} as Meta<typeof DefaultInput>;

const Template: StoryFn<typeof DefaultInput> = function Template(args) {
  return <DefaultInput {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Data de início',
  placeholder: 'DD/MM/AAAA',
  value: formatDate(new Date(), DATE_FORMATS.DAY_MONTH_4DIGITS_YEAR),
};
