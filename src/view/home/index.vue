<template>
  <div class="text-base bg-b-base p-2 h-full">
    {{ $t('home.name') }}
    <el-button @click="toggleDark()">
      {{ isDark ? 'Dark' : 'Light' }}
    </el-button>
    <el-dropdown style="margin-left: 20px" @command="changeLocale">
      <span class="el-dropdown-link">
        {{ localState.localLang === 'en' ? 'English' : '中文' }}
        <el-icon class="el-icon--right">
          <i-ep-arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="zn">中文</el-dropdown-item>
          <el-dropdown-item command="en">English</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup name="home">
import { useDark, useToggle } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { localeStore } from '@/store'
import type { Locale } from '#/index'

const localState = localeStore()

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'theme-dark',
  valueLight: 'theme-light',
})
const toggleDark = useToggle(isDark)

const { locale } = useI18n()
const changeLocale = (value: Locale) => {
  locale.value = value
  localState.localLang = value
}
</script>

<style scoped lang="less">
.el-dropdown {
  height: 32px;
  align-items: center;
}
</style>
