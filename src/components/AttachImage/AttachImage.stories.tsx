import { ChangeEvent } from 'react';

import { useArgs } from '@storybook/preview-api';
import { Meta, StoryFn } from '@storybook/react';
import { StateSetter } from 'models';

import { AttachImage } from './AttachImage';

export default {
  title: 'Components/AttachImage',
  component: AttachImage,
} as Meta<typeof AttachImage>;

const Template: StoryFn<typeof AttachImage> = function Template(args) {
  const [props, updateArgs] = useArgs();

  const setSelectedImage = (selectedImage: File | null) =>
    updateArgs({
      ...props,
      selectedImage,
    });

  const handleImageAttach = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0];

    updateArgs({
      ...props,
      selectedImage,
    });
  };

  return (
    <AttachImage
      {...args}
      {...props}
      inputId="attach-image"
      setSelectedImage={setSelectedImage as StateSetter<File | null>}
      onAttach={handleImageAttach}
    />
  );
};

export const Default = Template.bind({});

export const NotFilledImageHover = Template.bind({});
NotFilledImageHover.parameters = { pseudo: { hover: true } };

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const FilledImage = Template.bind({});

export const FilledImageHover = Template.bind({});
FilledImageHover.parameters = { pseudo: { hover: true } };
