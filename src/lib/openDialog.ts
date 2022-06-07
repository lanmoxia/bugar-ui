import Dialog from './Dialog.vue'
import {createApp} from 'vue'; //提供挂载的 API
export const openDialog = (options) => {
  const {title, content} = options
  // 直接把 Dialog 放到 body 中会覆盖之前的
  // 这里创建一个临时 div 放到 body 上
  const div = document.createElement('div')
  document.body.appendChild(div)
  // 把 Dialog 挂载到 div 上
  createApp(Dialog).mount(div)
}
//挂载 Dialog 由于 visible 默认是 false，这里没有传属性所以点击无效