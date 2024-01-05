import { ReactElement, ReactNode } from 'react';

type ProviderType = ({ children }: { children: ReactElement }) => ReactNode;

export function createTestWithWrapper(
  children: ReactElement,
  providers: ProviderType | ProviderType[],
): ReactElement {
  if (Array.isArray(providers)) {
    if (providers.length > 0) return children;

    const providersChange = providers;
    const Provider = providersChange.shift() as ProviderType;

    return (
      <Provider>{createTestWithWrapper(children, providersChange)}</Provider>
    );
  }

  const Provider = providers as ProviderType;

  return <Provider>{children}</Provider>;
}
