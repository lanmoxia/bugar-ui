import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// vue3 是 createApp(App)  vue2 是 new Vue()
// vue3 的 createApp(App) 接受的是组件
// vue2 的 new vue({template,render}) 接收的是对象
createApp(App).mount('#app')
