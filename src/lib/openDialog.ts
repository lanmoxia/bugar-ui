import Dialog from './Dialog.vue'
import { createApp, h } from 'vue'
export const openDialog = (options: any) => {
  const { title, content, ok, cancel } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = () => {
    app.unmount()
    div.remove()
  }
  // 定义名字方便销毁
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          ok,
          cancel,
          visible: true,
          'onUpdate:visible': (newVisible) => { // 监听 visible 事件
            if (newVisible === false) {
              close()
            }
          }
        },
        {
          title: () => h('strong', title),
          content: () => h('div', [h('p', content)])
        }
      )
    }
  })
  app.mount(div)
}
