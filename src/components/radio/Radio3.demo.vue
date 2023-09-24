<demo>按钮风格</demo>
<template>
  <Radio :options="options" isButton></Radio>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Radio from '../../lib/Radio.vue'
const state = reactive({
  options: [
    { label: "Apple", value: 1 },
    { label: "Orange", value: 2 },
    { label: "Pear", value: 3 },
    { label: "Disabled", value: 4, disabled: true }
  ]
})
const { options } = state
</script>