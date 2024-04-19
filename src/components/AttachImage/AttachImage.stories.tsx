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
      selectedImage={props.selectedImage}
      setSelectedImage={setSelectedImage as StateSetter<File | null>}
      onAttach={handleImageAttach}
    />
  );
};

const defaultProps = {
  inputId: 'attach-image',
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const NotFilledImageHover = Template.bind({});
NotFilledImageHover.args = {
  ...defaultProps,
};
NotFilledImageHover.parameters = { pseudo: { hover: true } };

export const Disabled = Template.bind({});
Disabled.args = {
  ...defaultProps,
  disabled: true,
};

export const FilledImage = Template.bind({});
FilledImage.args = {
  ...defaultProps,
};

export const FilledImageHover = Template.bind({});
FilledImageHover.args = {
  ...defaultProps,
};
FilledImageHover.parameters = { pseudo: { hover: true } };
