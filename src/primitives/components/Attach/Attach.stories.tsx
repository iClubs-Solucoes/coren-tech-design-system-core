import { ChangeEvent } from 'react';

import { useArgs } from '@storybook/preview-api';
import { Meta, StoryFn } from '@storybook/react';
import { colors, font } from 'common/styles';

import { Attach } from './Attach';

export default {
  title: 'Primitives/Attach',
  component: Attach,
} as Meta<typeof Attach>;

const Template: StoryFn<typeof Attach> = function Template(args) {
  const [props, updateArgs] = useArgs();

  const handleAttach = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0];

    console.log('Imagem selecionada:');
    console.log(selectedImage);

    updateArgs({
      ...props,
      selectedImage,
    });
  };

  return <Attach {...args} onAttach={handleAttach} />;
};

export const Default = Template.bind({});
Default.args = {
  inputId: 'attach',
  children: (
    <div
      style={{
        width: 'fit-content',
        padding: '0.65rem 0.8rem',
        borderRadius: '0.8rem',
        font: font.presets.bodyAndValue,
        color: colors.normal.black,
        backgroundColor: colors.neutral.gray1,
      }}
    >
      Escolha uma imagem
    </div>
  ),
  acceptedFileTypes: ['image/*'],
  disabled: false,
};
