import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {    
  	host: '0.0.0.0', // Allows external access    
  	port: 80,        // Runs on port 80  
  },
})