import { css } from 'dynamic-styled-components';
import { ElementOpening } from 'models';

interface DoesNotOverflowScreenParams {
  referenceElement: Element;
  distanceToBorder: number;
  gapToRefElement: number;
  opened: ElementOpening;
}

export function doesNotOverflowScreen({
  referenceElement,
  distanceToBorder,
  gapToRefElement,
  opened,
}: DoesNotOverflowScreenParams) {
  let maxHeight = '';

  const rect = referenceElement.getBoundingClientRect();

  if (opened.y === 'above') {
    maxHeight = `${rect.top - distanceToBorder - gapToRefElement}px`;
  }

  if (opened.y === 'below') {
    const distanceFromElementToBottom = window.innerHeight - rect.bottom;

    maxHeight = `${
      distanceFromElementToBottom - distanceToBorder - gapToRefElement
    }px`;
  }

  const doesNotOverflowScreenCSS = css`
    max-height: ${maxHeight};
  `;

  return { doesNotOverflowScreenCSS };
}
