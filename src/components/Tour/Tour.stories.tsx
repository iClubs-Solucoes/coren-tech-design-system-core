import { Meta, StoryFn } from '@storybook/react';

import { Tour } from './Tour';

export default {
  title: 'Components/Tour',
  component: Tour,
} as Meta<typeof Tour>;

const Template: StoryFn<typeof Tour> = function Template(args) {
  return (
    <div
      id="filter-tour"
      style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '50rem',
      }}
    >
      <div>123123123</div>
      <Tour {...args} />
      123123
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Atenção',
  description: 'Esta exclusão não poderá ser desfeita.',
  focus: true,
  idFilter: 'filter-tour',
  children: <div style={{ background: 'red' }}>123123</div>,
};
