import { resolve } from 'path';
import react from '@vitejs/plugin-react'

module.exports = {
  plugins: [
    react({
      include: '**/*.disabled',
    })
  ],
  // https://youtu.be/85-i4fr5MeU?t=299
  root: resolve('./assets'),
  base: '/static/',
  server: {
    host: 'localhost',
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('./assets/js/')
    }
  },
  build: {
    outDir: resolve('./assets/dist'),
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        // https://youtu.be/85-i4fr5MeU?t=315
        main: resolve('./assets/js/main.jsx'),
      },
      output: {
        chunkFileNames: undefined,
      },
    },
  },
};
