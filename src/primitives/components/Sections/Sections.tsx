import { Children, ReactNode } from 'react';

import * as S from './styles';
import { SectionsProps } from './types';

export function Sections({
  className,
  initialDivisor,
  sectionsPadding,
  children,
}: SectionsProps) {
  const childrensNumber = Children.count(children);

  const section = childrensNumber === 1;
  const sections = childrensNumber > 1;

  const renderSections = (sections: ReactNode[]) =>
    sections.map((section, index) => {
      const previousSection = sections[index - 1];
      const havePredecessor = !!previousSection;

      if (havePredecessor)
        return (
          <>
            <S.Hr />
            {section}
          </>
        );
      else {
        return section;
      }
    });

  return (
    <S.SectionsContainer
      className={className}
      sectionsPadding={sectionsPadding}
    >
      {initialDivisor && <S.Hr />}

      {section && children}

      {sections && renderSections(children as ReactNode[])}
    </S.SectionsContainer>
  );
}
