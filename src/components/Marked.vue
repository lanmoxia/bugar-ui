<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang="ts">
// 这里路径设置为动态
// 组件想要获取数据 只能通过 props
// 显然不行 import 是在 props 之前执行的
// import 是在引入文件执行 props 是在初始化组件的时候执行
// 能不能使用 setup
import md from '../markdown/intro.md'
import {ref} from 'vue';
export default {
  props:{
    content: {
      type: String,
      required: true
    }
  }
}
</script>
