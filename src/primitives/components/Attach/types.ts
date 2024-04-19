import { ChangeEvent, ReactNode } from 'react';

export type AttachProps = {
  className?: string;
  inputId: string;
  children?: ReactNode;
  acceptedFileTypes?: string[];
  disabled?: boolean;
  onAttach?: (event: ChangeEvent<HTMLInputElement>) => void;
};
