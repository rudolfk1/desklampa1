import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Use '0.0.0.0' to listen on all local IPs, or specify a specific IP address
    port: 3012, // Change to your desired port
  },
});