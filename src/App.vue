<template>
  <router-view/>
</template>

<script lang="ts">

import {provide, ref} from 'vue';
// 想要点击隐藏显示 doc/aside 我们需要一个 menuVisible=true/false 变量
// 变量放到 topNav 或 aside 上 对象都无法访问到
// 可以吧变量放到 app 上  app 使用 provide 提供
// topNav 和 aside 通过 inject 获取变量
export default {
  name: 'App',
  setup(){ // 声明 menuVisible
    const menuVisible = ref(false)
    // 'xxx' 的内容是 menuVisible
    // 其他地方使用只需要用 'xxx 即可
    provide('xxx', menuVisible) // 相当于是 set
  }
}
</script>
