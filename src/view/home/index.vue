<template>
  {{ $t('home.name') }}
  <el-button @click="toggleDark()">
    {{ isDark ? 'Dark' : 'Light' }}
  </el-button>
  <el-dropdown @command="changeLocale" style="margin-left: 20px">
      <span class="el-dropdown-link">
        {{ localeStore.state.localLang === 'en' ? 'English' : '中文' }}
        <el-icon class="el-icon--right">
          <arrow-down/>
        </el-icon>
      </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zhCn">中文</el-dropdown-item>
        <el-dropdown-item command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup name="home">
import { useToggle } from '@vueuse/shared'
import { useDark } from '@vueuse/core'
import { localeStore } from '@/store'
import { useI18n } from 'vue-i18n'
import { Locale } from '@/types'

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light'
})
const toggleDark = useToggle(isDark)

const { locale } = useI18n()
const changeLocale = (value: Locale) => {
  const { state } = localeStore
  locale.value = value
  state.localLang = value
}
</script>

<style scoped lang="less">
.el-dropdown {
  height: 32px;
  align-items: center;
}
</style>
