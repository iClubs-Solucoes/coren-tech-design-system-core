import * as S from './styles';
import { AttachProps } from './types';

export function Attach({
  className,
  inputId,
  children,
  acceptedFileTypes,
  disabled,
  onAttach,
}: AttachProps) {
  const accept = acceptedFileTypes?.join(',');

  return (
    <S.AttachContainer className={className}>
      <S.Label htmlFor={inputId}>{children}</S.Label>

      <S.Input
        id={inputId}
        accept={accept}
        disabled={disabled}
        onChange={onAttach}
      />
    </S.AttachContainer>
  );
}
