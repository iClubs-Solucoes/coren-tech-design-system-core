import { ChangeEvent } from 'react';

import { StateSetter } from 'models';

export type AttachImageProps = {
  className?: string;
  inputId: string;
  acceptedFileTypes?: string[];
  disabled?: boolean;
  selectedImage: SelectedImage;
  setSelectedImage: StateSetter<SelectedImage>;
  onAttach?: (event: ChangeEvent<HTMLInputElement>) => void;
};

type SelectedImage = File | null;

export type FilledContainerStyleProps = {
  disabled?: boolean;
};

export type NotFilledContainerStyleProps = {
  disabled?: boolean;
};

export type NotFilledImageContainerStyleProps = {
  disabled?: boolean;
};

export type NotFilledTitleStyleProps = {
  disabled?: boolean;
};

export type PlaceholderStyleProps = {
  disabled?: boolean;
};

export type ImgIconStyleProps = {
  disabled?: boolean;
};
