// 解决 vue3 can not find module 问题
declare module '*.vue' {
  import { ComponentOptions } from 'vue'

  const componentOptions: ComponentOptions
  export default componentOptions
}