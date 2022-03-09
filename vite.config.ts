import { defineConfig, loadEnv } from 'vite'
import { join } from 'path'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'

function resolve(dir: string) {
  return join(__dirname, dir)
}


export default ({ mode }:{mode: any}) => {
  return defineConfig({
    server: {
      proxy: {
        [`${loadEnv(mode, process.cwd()).VITE_APP_BASE_API}`]: {
          target: loadEnv(mode, process.cwd()).VITE_TEST_HOST, // 线上
          // rewrite: (path:any) => path.replace(/^\/api/, ''),
          changeOrigin: true,
          ws: true
        }
      }
    },
    plugins: [vue(), viteCompression()],
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
}
