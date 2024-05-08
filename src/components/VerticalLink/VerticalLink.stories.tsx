import { useArgs } from '@storybook/preview-api';
import { Meta, StoryFn } from '@storybook/react';
import { MoreIcon } from 'common/assets/icons';
import { TextField } from 'components';
import styled from 'dynamic-styled-components';
import { Button } from 'primitives';

import { VerticalLink } from './VerticalLink';

export default {
  title: 'Components/VerticalLink',
  component: VerticalLink,
} as Meta<typeof VerticalLink>;

const AddFieldButton = styled(Button)`
  width: fit-content;
  border-radius: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
`;

const Field = styled(TextField)`
  height: 2.3rem;
`;

const Template: StoryFn<typeof VerticalLink> = function Template(args) {
  const [props, updateArgs] = useArgs();

  const handleFieldAdd = () => {
    const currentFields = props.childrens;

    const label = `Campo ${currentFields.length + 1}`;

    const childrenToLink = { id: label, children: <TextField label={label} /> };

    updateArgs({
      ...props,
      childrens: [...currentFields, childrenToLink],
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '1.6rem',
        flexDirection: 'column',
        paddingLeft: '3.2rem',
      }}
    >
      <AddFieldButton buttonTheme="third" onClick={handleFieldAdd}>
        <>
          <MoreIcon />
          <p>Adicione mais um campo</p>
        </>
      </AddFieldButton>

      <VerticalLink {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  childrens: [
    { id: 'field-1', children: <Field label="Campo 1" /> },
    { id: 'field-2', children: <Field label="Campo 2" /> },
  ],
  linkText: 'e',
};

export const WithoutLinkText = Template.bind({});
WithoutLinkText.args = {
  childrens: [
    { id: 'field-1', children: <Field label="Campo 1" /> },
    { id: 'field-2', children: <Field label="Campo 2" /> },
  ],
};

export const OneChild = Template.bind({});
OneChild.args = {
  childrens: [{ id: 'field-1', children: <TextField label="Campo 1" /> }],
};
