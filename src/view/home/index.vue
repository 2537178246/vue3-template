<template>
  this is home
</template>

<script lang="ts" setup>
import { getTest } from '@/api/test'
import { onMounted } from 'vue'
import moment from 'moment'

onMounted(() => {
  getData()
})
const getData = async() => {
  const time:string = moment().format('YYYYMMDDHH')
  const data = await getTest({ time })
  console.log(data)
}
</script>

<style scoped lang="less">

</style>
