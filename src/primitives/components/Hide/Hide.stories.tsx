import { useRef } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Hide } from './Hide';

export default {
  title: 'Primitives/Hide',
  component: Hide,
} as Meta<typeof Hide>;

const Template: StoryFn<typeof Hide> = function Template(args) {
  return <Hide {...args} />;
};

export const Hidden = Template.bind({});
Hidden.args = {};

export const NotHidden = Template.bind({});
NotHidden.args = {};

const PasswordField: StoryFn<typeof Hide> = function PasswordField() {
  const ref = useRef<HTMLInputElement>();

  return (
    <div style={{ display: 'flex', gap: '1.6rem' }}>
      <input
        ref={element => {
          if (element) ref.current = element;
        }}
        type="password"
      />
      <Hide passwordInput={ref} />
    </div>
  );
};

export const Password = PasswordField.bind({});
Password.args = {};
