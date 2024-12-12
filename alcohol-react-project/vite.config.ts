import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@components': '/src/COMPONENTS',  // Ensure this matches the path you want
    },
  },
});
