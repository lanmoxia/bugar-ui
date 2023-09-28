<demo>可多选</demo>
<template>
  <Select :options="options" :multiple="true" v-model="selectedOptions" :isIcon="true"></Select>
</template>

<script setup lang="ts">
import { Select } from '../../lib/index'
import { reactive, ref } from 'vue'
const state = reactive({
  options: [
    { label: '北京' },
    { label: '上海' },
    { label: '深圳' },
    { label: '广州' },
    { label: '北京' }
  ],
  selectedOptions: ref([])
})
const { options, selectedOptions } = state
</script>