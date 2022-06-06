// 必须放到前边
import './lib/gugu.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'

const app = createApp(App)
app.use(router) // 使用 app.use
app.mount('#app')
