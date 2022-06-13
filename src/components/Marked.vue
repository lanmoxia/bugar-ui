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
  // data(){
  //   return {
  //     data(){
  //       return {md}
  //     }
  //   }
  // }
  props:{
    path: {
      type: String,
      required: true
    }
  },
  // 行不通
  //async setup(props){
  //setup(props){
    //import md from props.path // 这样不行
    // 使用 import(props.path) 的方式
    // 这是一个异步任务 想要返回内容 好像可以使用 await
    // 问题来了 内部想要使用 await  setup 这里就要使用 async 会有问题
    // await import (props.path)

  // 正确方式 import(props.path) 请求完加载好 md 文件以后
  setup(props){
    // content 开始为空
    const content = ref(null)
    // import()是异步 不能直接拿到值  通过 then 获取
    import(props.path).then(result => {
      // console.log(result);
      // console.log(result.default);
      //拿到结果赋值给 content.value
      content.value = result.default
    })
    // 然后把 content 返回出去
    return {content}
  }
}
</script>