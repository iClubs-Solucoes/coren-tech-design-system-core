import { Meta, StoryFn } from '@storybook/react';
import { LessIcon, MoreIcon } from 'common/assets/icons';

import { SelectChildren } from './SelectChildren';
import { SelectChildrenProps } from './types';

export default {
  title: 'Components/Selects/SelectChildren',
  component: SelectChildren,
} as Meta<typeof SelectChildren>;

const Template: StoryFn<typeof SelectChildren> = function Template(args) {
  const defaultProps: SelectChildrenProps = {
    selectedItem: {
      value: 'sum',
      label: 'Adição',
    },
    items: [
      {
        value: 'sum',
        label: 'Adição',
        children: (
          <div style={{ display: 'flex', gap: '1.6rem', alignItems: 'center' }}>
            <MoreIcon />
            Adição
          </div>
        ),
      },
      {
        value: 'subtraction',
        label: 'Subtração',
        children: (
          <div style={{ display: 'flex', gap: '1.6rem', alignItems: 'center' }}>
            <LessIcon />
            Subtração
          </div>
        ),
      },
    ],
    onChange: data => console.log(data),
  };

  return <SelectChildren {...defaultProps} {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

export const WithSearch = Template.bind({});
WithSearch.args = {
  search: {
    value: 'Divi',
  },
};
