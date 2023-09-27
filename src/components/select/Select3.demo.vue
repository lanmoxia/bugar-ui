<demo>禁用状态</demo>
<template>
  <Select :options="options" disabled></Select>
</template>

<script setup lang="ts">
import { Select } from '../../lib/index'
import { reactive } from 'vue'
const state = reactive({
  options: [
    { label: '北京', value: 'bei jing' },
    { label: '上海', value: 'shang hai' },
    { label: '深圳', value: 'shen zhen' },
    { label: '广州', value: 'guang zhou' }
  ]
})
const { options } = state
</script>