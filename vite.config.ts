import { VitePWA } from 'vite-plugin-pwa'

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, PluginOption } from "vite";

// ❌ Removed sparkPlugin import
import createIconImportProxy from "@github/spark/vitePhosphorIconProxyPlugin";
import { resolve } from 'path'

const projectRoot = process.env.PROJECT_ROOT || import.meta.dirname

// https://vite.dev/config/
export default defineConfig({
  base: '/', // ✅ correct for Vercel hosting
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "Morada do Sol Ovos",
        short_name: "Ovos",
        start_url: ".",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    }),
    react(),
    tailwindcss(),
    // DO NOT REMOVE
    createIconImportProxy() as PluginOption,
    // ❌ sparkPlugin() removed
  ],
  resolve: {
    alias: {
      '@': resolve(projectRoot, 'src')
    }
  },
})
