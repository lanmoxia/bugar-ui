import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import Test from './components/Test.vue'
import Test2 from './components/Test2.vue'
// 入口文件
const history = createWebHashHistory()
// main.js 改为 main.ts 文件 提示应该有一个参数
// 通过 ctrl 点击 createRouter 发现类型是 RouterOptions
// 再点击往下看到 history routes 这些属性 应该就是我们定义的 history 和 router
// 参数应该是一个对象 {history 对应我们选的 hash 模式 routes 应该是一个数组(不同的路由)}
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Test},
    {path: '/test2', component: Test2}
  ]
})
const app = createApp(App)
app.use(router) // 使用 app.use
app.mount('#app')
