import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({ include: /\.(jsx|tsx)$/ }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        cotizador: resolve(__dirname, 'cotizador.html'),
        soporte: resolve(__dirname, 'soporte.html'),
      },
    },
  },
});
