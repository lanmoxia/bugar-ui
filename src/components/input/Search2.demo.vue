<demo>自定义搜索文本</demo>
<template>
  <Input v-model="value" placeholder="custom text button" buttonStyle searchText="Search" @onSearch="onSearch" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '../../lib/index'
const value = ref('')
const onSearch = (value: string) => {
  console.log(`the value of Search is ${value}`)
}
</script>