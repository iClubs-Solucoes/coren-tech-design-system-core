import React from 'react';
import ReactDOM from 'react-dom/client';

import { TestingComponents } from './TestingComponents.js';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <TestingComponents />
  </React.StrictMode>,
);
