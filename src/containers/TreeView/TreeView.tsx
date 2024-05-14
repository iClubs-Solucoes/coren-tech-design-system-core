import { Children, ReactNode, useEffect, useState } from 'react';

import { v4 as uuid } from 'uuid';

import * as S from './styles';
import { ChildrenWithId, TreeViewProps } from './types';

export function TreeView({
  className,
  parent,
  children,
  links,
  blackLinks,
}: TreeViewProps) {
  const [childrens, setChildrens] = useState<ChildrenWithId[]>([]);

  const renderLinkedChildrens = () =>
    childrens.map(currentChildren => {
      const { id } = currentChildren;

      return (
        <S.LinkedChildren
          key={id}
          shortLinkCSS={links?.shortLinkCSS}
          longLinkCSS={links?.longLinkCSS}
          blackLinks={blackLinks}
        >
          {currentChildren.children}
        </S.LinkedChildren>
      );
    });

  const linkedChildrens = renderLinkedChildrens();

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
    <S.TreeViewContainer className={className}>
      {parent && parent}

      <S.LinkedChildrens>{linkedChildrens}</S.LinkedChildrens>
    </S.TreeViewContainer>
  );
}
