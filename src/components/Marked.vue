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
    path: {
      type: String,
      required: true
    }
  },
  setup(props){
    const content = ref(null)
    import(props.path).then(result => {
      // 这里通过定时器来重现下 content 从无到有
      setTimeout(()=>{
        content.value = result.default
      },5000)
    })
    return {content}
  }
}
</script>