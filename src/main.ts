// 必须放到前边
import './lib/bugar.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'github-markdown-css'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(router)
app.mount('#app')
