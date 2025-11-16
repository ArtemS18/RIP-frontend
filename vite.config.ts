import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import mkcert from 'vite-plugin-mkcert'
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mkcert(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest:{
        name: "FailiverCheck",
        short_name: "Failiver",
        start_url: "/RIP-frontend",
        display: "standalone",
        background_color: "#0D1117",
        theme_color: "#38db6cff",
        orientation: "portrait-primary",
        icons: [
          {
            "src": "/vite.svg",
            "type": "image/png", "sizes": "192x192"
          },
          {
            "src": "/vite.svg",
            "type": "image/png", "sizes": "512x512"
          }
        ],
      }
    })
  ],
  base: "/RIP-frontend",
  server: {
    https:{
    key: fs.readFileSync(path.resolve(__dirname, 'cert.key')),
    cert: fs.readFileSync(path.resolve(__dirname, 'cert.crt')),
    },
    port: 3000,
    proxy: {
      // GET /api/users  -> http://localhost:8080/users
      '/api': {
        target: 'http://localhost:8080/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,''),
      },
    }
  }
  
  
})