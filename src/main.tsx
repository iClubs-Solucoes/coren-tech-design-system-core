import React from 'react';
import ReactDOM from 'react-dom/client';

import { CoreProvider } from './';
import { TestingComponents } from './TestingComponents.js';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <CoreProvider>
      <TestingComponents />
    </CoreProvider>
  </React.StrictMode>,
);
