import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              fileName: true, // Show source file
              displayName: true, // Show component name
              pure: true,
            },
          ],
        ],
      },
    }),
  ],
});
