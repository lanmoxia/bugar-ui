<demo>搜索框</demo>
<template>
  <Input v-model="value" placeholder="default search" icon-type="search" @onSearch="onSearch" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Input from '../../lib/Input.vue'
const value = ref('')
const onSearch = (value: string) => {
  console.log(`the value of Search is ${value}`)
}
</script>