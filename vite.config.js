import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
// import AutoImport from '@vitejs/plugin-vue'
// https://vite.dev/config/
// import * as  path from 'path'
export default defineConfig({
  plugins: [vue(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
    imports: ['vue', 'vue-router']
  }),
  Components({
    resolvers: [ElementPlusResolver()]
  })
  ],
  // resolve: {
  //   //配置别名路径
  //   alias: {
  //     '@': path.resolve(__dirname, './src')
  //   }
  // }
})
