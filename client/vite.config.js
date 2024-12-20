import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      // --- define environment variables to use on client side ---
      'process.env.VITE_PORT': JSON.stringify(env.VITE_PORT),
      'process.env.VITE_AUTH0_DOMAIN': JSON.stringify(env.VITE_AUTH0_DOMAIN),
      'process.env.VITE_AUTH0_CLIENT_ID': JSON.stringify(env.VITE_AUTH0_CLIENT_ID),
      'process.env.DOMAIN': JSON.stringify(env.DOMAIN),
    },
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
    },
    server: {
      proxy: {
        '/api': {
          target: process.env.DOMAIN,
          changeOrigin: true,
          secure: false,
        }
      }
    }
  }
})
