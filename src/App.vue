<template>
  <router-view/>
</template>

<script lang="ts">

import {provide, ref} from 'vue';
export default {
  name: 'App',
  setup(){
    // 获取当前页面宽度
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width <= 500 ? false : true)
    provide('menuVisible', menuVisible) // 相当于是 set
  }
}
</script>
