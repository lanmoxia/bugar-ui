<demo>
  常规使用
  </demo>
<template>
  <Tabs v-model:selected="defaultTitle">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>
  
<script setup lang="ts">
import { Tabs, Tab } from '../../lib/index'
import { ref } from 'vue'
const defaultTitle = ref('导航2')
</script>
  