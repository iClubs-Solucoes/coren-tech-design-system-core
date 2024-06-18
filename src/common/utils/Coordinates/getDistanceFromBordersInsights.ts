export function getDistanceFromBordersInsights(element: Element) {
  const rect = element.getBoundingClientRect();

  const distanceToTop = rect.top;
  const distanceToBottom = window.innerHeight - rect.bottom;

  const moreSpaceAbove = distanceToTop > distanceToBottom;
  const moreSpaceBelow = distanceToBottom > distanceToTop;

  return { elementRect: rect, moreSpaceAbove, moreSpaceBelow };
}
