import path from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import type { UserConfigExport } from 'vite'

const pathSrc = path.resolve(__dirname, 'src')

export default (): UserConfigExport => {
  return defineConfig({
    base: './',
    server: {
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: 'target path', // 线上
          // rewrite: (path:any) => path.replace(/^\/api/, ''),
          changeOrigin: true,
          ws: true,
        },
      },
    },
    plugins: [
      vue(),
      vueSetupExtend(),
      viteCompression({
        ext: '.gz',
        algorithm: 'gzip',
        deleteOriginFile: false,
      }),
      AutoImport({
        // targets to transform
        include: [/\.[jt]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
        // Auto import functions from Vue, e.g. ref, reactive, toRef...
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: [
          'vue',
          'vue-router',
          {
            'element-plus': ['ElLoading', 'ElMessage'],
          },
        ],
        // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [
          ElementPlusResolver(),

          // Auto import icon components
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon',
          }),
        ],

        dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
      }),
      Components({
        resolvers: [
          // Auto register icon components
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep'],
          }),
          // Auto register Element Plus components
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
        ],

        dts: path.resolve(pathSrc, 'components.d.ts'),
      }),
      Icons({
        compiler: 'vue3',
        autoInstall: true,
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@public': fileURLToPath(new URL('./public', import.meta.url)),
        '#': path.resolve(__dirname, 'src/types'),
      },
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
          },
        },
      },
    },
  })
}
