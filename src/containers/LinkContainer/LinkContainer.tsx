import { Children, ReactNode, useEffect, useState } from 'react';

import { v4 as uuid } from 'uuid';

import * as S from './styles';
import { defaultLinkCSS } from './styles';
import { ChildrenWithId, LinkContainerProps } from './types';

export function LinkContainer({
  className,
  children,
  linkCSS = defaultLinkCSS,
}: LinkContainerProps) {
  const [childrens, setChildrens] = useState<ChildrenWithId[]>([]);

  const renderContainerItems = () =>
    childrens.map(child => (
      <S.ContainerItem key={child.id}>{child.children}</S.ContainerItem>
    ));

  const containerItems = renderContainerItems();

  useEffect(() => {
    const oneChildren = Children.count(children) === 1;

    const childrenArray: ReactNode[] = oneChildren
      ? [children]
      : (children as ReactNode[]);

    const childrens = childrenArray.map(children => ({
      id: uuid(),
      children,
    }));

    setChildrens(childrens);
  }, [children]);

  return (
    <S.LinkContainerContainer className={className} linkCSS={linkCSS}>
      {containerItems}
    </S.LinkContainerContainer>
  );
}
