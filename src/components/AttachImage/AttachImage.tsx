import { Attach } from 'primitives';

import * as S from './styles';
import { AttachImageProps } from './types';

export function AttachImage({
  selectedImage,
  setSelectedImage,
  ...attachProps
}: AttachImageProps) {
  const { acceptedFileTypes = ['image/*'], disabled } = attachProps;

  const computedDisable = selectedImage ? true : disabled;

  const handleDetach = () => setSelectedImage?.(null);

  return (
    <S.AttachImageContainer>
      <Attach
        acceptedFileTypes={acceptedFileTypes}
        {...attachProps}
        disabled={computedDisable}
      >
        {selectedImage && (
          <S.FilledContainer>
            <S.FilledImageContainer>
              <S.Image src={URL.createObjectURL(selectedImage)} />
            </S.FilledImageContainer>

            <S.Description>
              <S.FilledTitle>Imagem</S.FilledTitle>

              <S.ImageName>{selectedImage.name}</S.ImageName>
            </S.Description>
          </S.FilledContainer>
        )}

        {!selectedImage && (
          <S.NotFilledContainer disabled={disabled}>
            <S.NotFilledImageContainer disabled={disabled}>
              <S.ImgIcon disabled={disabled} />
            </S.NotFilledImageContainer>

            <S.Description>
              <S.NotFilledTitle disabled={disabled}>Imagem</S.NotFilledTitle>

              <S.Placeholder disabled={disabled}>
                Arraste e solte ou{' '}
                <S.ChooseFile>escolha um arquivo</S.ChooseFile>
              </S.Placeholder>
            </S.Description>
          </S.NotFilledContainer>
        )}
      </Attach>

      {selectedImage && <S.DetachButton onClick={handleDetach} />}
    </S.AttachImageContainer>
  );
}
