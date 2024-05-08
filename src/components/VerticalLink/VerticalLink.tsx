import * as S from './styles';
import { VerticalLinkProps } from './types';

export function VerticalLink({
  className,
  linkText,
  childrens,
}: VerticalLinkProps) {
  const oneChild = childrens.length === 1;
  const childs = childrens.length > 1;

  const renderLinkedChildrens = () => {
    return childrens.map((childrenToLink, index) => {
      const { id, children } = childrenToLink;

      const havePredecessor = childrens[index - 1]?.children;
      const haveSuccessor = childrens[index + 1]?.children;

      const key = `${id}-link`;

      return (
        <S.LinkedChildren
          key={key}
          havePredecessor={!!havePredecessor}
          haveSuccessor={!!haveSuccessor}
        >
          {children}

          {linkText && haveSuccessor && <S.LinkText>{linkText}</S.LinkText>}
        </S.LinkedChildren>
      );
    });
  };

  return (
    <S.VerticalLinkContainer className={className}>
      {oneChild && childrens[0].children}

      {childs && (
        <S.LinkedChildrens>{renderLinkedChildrens()}</S.LinkedChildrens>
      )}
    </S.VerticalLinkContainer>
  );
}
