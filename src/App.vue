<template>
  <router-view />
</template>

<script setup lang="ts">

import { provide, ref } from 'vue'
import { router } from './router'

// 获取当前页面宽度
const width = document.documentElement.clientWidth
const menuVisible = ref(width > 500)
provide('menuVisible', menuVisible)

// 移动端路由变化了就把 menuVisible 的值改为 false
router.afterEach(() => {
  if (width <= 500) {
    menuVisible.value = false
  }
})
</script>
