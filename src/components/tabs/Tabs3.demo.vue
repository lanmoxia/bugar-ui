<demo>
  按钮主题
  </demo>
<template>
  <Tabs v-model:selected="defaultTitle" is-button>
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
    <Tab title="导航3">内容3</Tab>
    <Tab title="导航4">内容4</Tab>
    <Tab title="导航5">内容5</Tab>
    <Tab title="导航6">内容6</Tab>
  </Tabs>
</template>
  
<script setup lang="ts">
import { Tabs, Tab } from '../../lib/index'
import { ref } from 'vue'
const defaultTitle = ref('导航2')
</script>
  