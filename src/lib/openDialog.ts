import Dialog from './Dialog.vue'
import {createApp, h} from 'vue'; //提供挂载的 API
export const openDialog = (options) => {
  const {title, content} = options
  // 直接把 Dialog 放到 body 中会覆盖之前的
  // 这里创建一个临时 div 放到 body 上
  const div = document.createElement('div')
  document.body.appendChild(div)
  // 把 Dialog 挂载到 div 上
  createApp({
    render(){
      return h(
        Dialog,
        {visible: true},
        {title:title, content: content}
      )
    }
  }).mount(div)
}
// 传入 title 和 content
