import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        // target: 'http://localhost:3000',
        target: 'https://mern-2-0-git-master-sanketpatel98s-projects.vercel.app',
        secure: true,
        changeOrigin: true
      }
    }
  },
  plugins: [react()],
})
