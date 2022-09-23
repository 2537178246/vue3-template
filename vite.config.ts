import { defineConfig, loadEnv, UserConfigExport, ConfigEnv } from 'vite'
import { join } from 'path'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

function resolve(dir: string) {
  return join(__dirname, dir)
}

export default ({ mode }: ConfigEnv): UserConfigExport => {
  return defineConfig({
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
      viteCompression({
        ext: '.gz',
        algorithm: 'gzip',
        deleteOriginFile: false
      })],
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    css: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 16, // 换算的基数
            selectorBlackList: [], // 忽略转换正则匹配项 列入一些ui库, ['.el'] 就是忽略elementUI库
            propList: ['*']
          })
        ]
      }
    },
    build: {
      target: 'es2015',
      outDir: 'dist'
      // assetsDir: 'assets'
    }
  })
}
