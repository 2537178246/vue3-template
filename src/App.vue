<script setup lang="ts">
import { version as vueVersion } from 'vue/package.json'
import { localeStore } from '@/store'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
onMounted(() => {
  hello('V3-Tem', vueVersion)
})
const localState = localeStore()
const hello = (title: string, version: string) =>
  console.log(
    `%c ${title} %c V${version}`,
    'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;',
    'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;'
  )
</script>

<template class="text-base bg-b-base">
  <el-config-provider :locale="localState.locale">
    <router-view />
  </el-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color);
}

html {
  color: var(--color);
  background: var(--bg-color);
}
</style>
