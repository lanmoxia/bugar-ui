// 必须放到前边
import './lib/bugu.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import 'github-markdown-css'
import Markdown from './components/Marked.vue';
import './lib/svg.js'

const app = createApp(App)
app.use(router) // 使用 app.use
app.mount('#app')
// 入口处引入 Markdown 全局组件都可以不用引入使用
app.component('Markdown', Markdown)