import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Contacto from './Contacto';

const root = document.getElementById('react-root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <Contacto />
    </StrictMode>
  );
}
