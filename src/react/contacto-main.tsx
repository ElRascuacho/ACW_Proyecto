import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ContactoApp from './ContactoApp';

const root = document.getElementById('react-root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <ContactoApp />
    </StrictMode>
  );
}
