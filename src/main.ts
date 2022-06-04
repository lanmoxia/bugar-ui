import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc, children:[
        {path: 'switch', component: SwitchDemo}
      ]}
  ]
})
// 通过 router.afterEach 能知道路由有没有切换
// 这样切换了可以改变 menuVisible 的值
// 因为 menuVisible 变量在 App 中 无法访问到
// 把 router.afterEach 放到 App 中 这样就能访问到 menuVisible
// 但是 App 访问不到 router
router.afterEach(() => {
  console.log('路由切换了');
})
const app = createApp(App)
app.use(router) // 使用 app.use
app.mount('#app')
