import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-dom/client',
        'react/jsx-runtime',
        'lucide-react',
        'react-helmet-async',
        'react-markdown',
        'fuse.js',
        '@google/genai'
      ]
    }
  },
  optimizeDeps: {
    exclude: [
      'react',
      'react-dom',
      'lucide-react',
      'react-helmet-async',
      'react-markdown',
      'fuse.js',
      '@google/genai'
    ]
  }
});