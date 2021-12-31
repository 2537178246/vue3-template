import { defineConfig } from 'vite'
import { join } from 'path'
import vue from '@vitejs/plugin-vue'

function resolve(dir: string) {
  return join(__dirname, dir)
}

export default defineConfig({
  define: {
    'process.env': {
      'VUE_APP_BASE_API': '/api'
    }
  },
  server: {
    proxy: {
      '/api': {
        // target: 'http://10.110.172.230:30038', // 线上
        target: 'http://10.104.207.239:30038/tj', // 线下
        // rewrite: (path:any) => path.replace(/^\/api/, ''),
        changeOrigin: true,
        ws: true
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  build: {
    target: 'es2015',
    outDir: 'dist'
    // assetsDir: 'assets'
  }
})
