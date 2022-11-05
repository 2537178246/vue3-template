<script setup lang="ts">
import appStore from '@/store'
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
onMounted(() => {
  hello('V3-Tem', '2.1.6')
})
const { localState } = storeToRefs(appStore.localeStore)
const locale = computed(() => localState.value.elementLangType[localState.value.localLang])
const hello = (title: string, version: string) =>
  console.log(`%c ${title} %c V${version} `,
    'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;',
    'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;')
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
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
