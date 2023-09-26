<demo>常规使用</demo>
<template>
  <Select :options="options" isIcon />
</template>

<script setup lang="ts">
import { Select } from '../../lib/index'
import { reactive } from 'vue'
const state = reactive({
  options: [
    { label: '北京', value: 'beijing' },
    { label: '上海', value: 'shanghai' },
    { label: '广州', value: 'guangzhou' },
    { label: '深圳', value: 'shenzhen' },
    { label: '香港', value: 'xianggang' },
    { label: '澳门', value: 'aomen' }
  ]
})
const { options } = state
</script>