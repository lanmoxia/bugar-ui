import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import {createRouter, createWebHashHistory} from 'vue-router';
import {h} from 'vue';
import Markdown from './components/Marked.vue'
import intro from './markdown/intro.md'
import install from './markdown/install.md'
import getStarted from './markdown/getStarted.md'

const history = createWebHashHistory()
// build 以后提示报错动态引入找不到模块
// 这是因为动态加载的原因 动态就是下面代码中拼字符串的代码
// build 是使用的 Rollup 检查代码的时候不知道 filename 是什么
// 只有下边执行 md() 函数的时候才知道 intro install 这些
// 检查代码不能运行代码 所以导致报错 这里改为静态加载

// h 函数这里的 key 正常我们可以在使用函数的地方加个加个 key 比如 md(intro， 'intro')
// 这里有个取巧的地方 我们这里可以直接把接收的字符串 string 作为 key  只要不重复即可
const md = string => h(Markdown, {content: string, key: string})
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc, children:[
        {path: '', redirect: '/doc/intro'},
        {path: 'intro', component: md(intro)},
        {path: 'get-started', component: md(getStarted)},
        {path: 'install', component: md(install)},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
      ]}
  ]
})

router.afterEach(() => {
  // console.log('路由切换了');
})
