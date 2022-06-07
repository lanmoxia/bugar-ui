import Dialog from './Dialog.vue'
import {createApp, h} from 'vue'; //提供挂载的 API
export const openDialog = (options) => {
  const {title, content} = options
  // 直接把 Dialog 放到 body 中会覆盖之前的
  // 这里创建一个临时 div 放到 body 上
  const div = document.createElement('div')
  document.body.appendChild(div)
  // 定义名字方便销毁
  const app = createApp({
    render(){
      return h(
        Dialog,
        {
          visible: true,
          'onUpdate:visible': (newVisible) => { // 监听 visible 事件
            if(newVisible === false){
              app.unmount()
              div.remove()
            }
          }
        },
        {title:title, content: content}
      )
    }
  })
  // vue 语法 必须跟上边是分开的
  // 上边的 app 是CreateApp() 返回的 而不是 .mount(div) 返回的
  app.mount(div)
}
// 这里的 visible:true 写死的 所以点击不能关闭 Dialog
// 关闭 Dialog 也就是销毁 CreateApp 这里先在 div 卸载 再销毁 div
