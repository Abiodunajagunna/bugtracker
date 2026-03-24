import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'BugTrack',
        short_name: 'BugTrack',
        description: 'Bed Bug Detection & Awareness System',
        theme_color: '#ef4444',
        background_color: '#ffffff',
        display: 'standalone'
      }
    })
  ]
});
