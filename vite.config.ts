import { defineConfig, UserConfigExport, ConfigEnv } from 'vite'
import { join } from 'path'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import rollupPluginVisualizer from 'rollup-plugin-visualizer'

function resolve(dir: string) {
  return join(__dirname, dir)
}

export default ({ mode }: ConfigEnv): UserConfigExport => {
  return defineConfig({
    base: './',
    server: {
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: 'target path', // 线上
          // rewrite: (path:any) => path.replace(/^\/api/, ''),
          changeOrigin: true,
          ws: true
        }
      }
    },
    plugins: [
      vue(),
      vueSetupExtend(),
      rollupPluginVisualizer(),
      viteCompression({
        ext: '.gz',
        algorithm: 'gzip',
        deleteOriginFile: false
      })],
    resolve: {
      alias: {
        '@': resolve('src'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    },
    build: {
      target: 'es2015',
      outDir: 'dist',
      rollupOptions: {
        output: {
          manualChunks(id) {
            // 将pinia的全局库实例打包进vendor，避免和页面一起打包造成资源重复引入
            if (id.includes(path.resolve(__dirname, '/src/store/index.ts'))) {
              return 'vendor'
            }
          }
        }
      }
      // assetsDir: 'assets'
    }
  })
}
