import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
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
