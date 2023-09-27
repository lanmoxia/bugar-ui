<demo>禁用选项</demo>
<template>
  <Select :options="options"></Select>
</template>

<script setup lang="ts">
import { Select } from '../../lib/index'
import { reactive } from 'vue'
const state = reactive({
  options: [
    { label: '北京', value: 'bei jing' },
    { label: '上海', value: 'shang hai' },
    { label: '深圳', value: 'shen zhen', disabled: true },
    { label: '广州', value: 'guang zhou' }
  ]
})
const { options } = state
</script>