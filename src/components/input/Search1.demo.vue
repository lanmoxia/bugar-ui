<demo>搜索框</demo>
<template>
  <Input v-model="value" placeholder="default search" iconName="search" iconColor="#d9d9d9" iconHover
    @onSearch="onSearch" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '../../lib/index'
const value = ref('')
const onSearch = (value: string) => {
  console.log(`the value of Search is ${value}`)
}
</script>