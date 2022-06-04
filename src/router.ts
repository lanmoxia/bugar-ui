import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import {createRouter, createWebHashHistory} from 'vue-router';

const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc, children:[
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
      ]}
  ]
})
// 通过 router.afterEach 能知道路由有没有切换
// 这样切换了可以改变 menuVisible 的值
// 因为 menuVisible 变量在 App 中 无法访问到
// 把 router.afterEach 放到 App 中 这样就能访问到 menuVisible
// 但是 App 访问不到 router
// 所以新建文件把 router 的相关放到这里
router.afterEach(() => {
  console.log('路由切换了');
})