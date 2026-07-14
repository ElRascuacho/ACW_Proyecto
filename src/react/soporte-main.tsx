import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SoporteApp from './SoporteApp';

const root = document.getElementById('react-root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <SoporteApp />
    </StrictMode>
  );
}
