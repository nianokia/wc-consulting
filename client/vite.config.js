import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.VITE_PORT': JSON.stringify(env.VITE_PORT),
      'process.env.VITE_AUTH0_DOMAIN': JSON.stringify(env.VITE_AUTH0_DOMAIN),
      'process.env.VITE_AUTH0_CLIENT_ID': JSON.stringify(env.VITE_AUTH0_CLIENT_ID),
      'process.env.DOMAIN': JSON.stringify(env.DOMAIN),
    },
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: `http://localhost:${process.env.VITE_PORT}`,
          changeOrigin: true,
          secure: false,
        }
      }
    }
  }
})
