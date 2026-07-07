import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Soporte from './Soporte';

const root = document.getElementById('react-root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <Soporte />
    </StrictMode>
  );
}
