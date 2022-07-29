// 解决 vue3 can not find module 问题
import {ComponentOptions} from 'vue';

declare module '*.vue' {
  import { ComponentOptions } from 'vue'

  const componentOptions: ComponentOptions
  export default componentOptions
}
// 这里也是为了解决引入 .md 文件报错
declare module '*.md' {
  const str: string
  export default str
}
