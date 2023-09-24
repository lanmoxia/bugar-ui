const Home = () => import('./views/Home.vue')
const Doc = () => import('./views/Doc.vue')
const SwitchDemo = () => import('./components/SwitchDemo.vue')
const ButtonDemo = () => import('./components/ButtonDemo.vue')
const DialogDemo = () => import('./components/DialogDemo.vue')
const TabsDemo = () => import('./components/TabsDemo.vue')
const InputDemo = () => import('./components/InputDemo.vue')
const GridDemo = () => import('./components/GridDemo.vue')
const PageDemo = () => import('./components/PageDemo.vue')
const RadioDemo = () => import('./components/RadioDemo.vue')
const intro = () => import('./markdown/intro.md')
const install = () => import('./markdown/install.md')
const started = () => import('./markdown/started.md')
import { createRouter, createWebHashHistory } from 'vue-router'

const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc, children: [
        { path: '', redirect: '/doc/intro' },
        { path: 'intro', component: intro },
        { path: 'install', component: install },
        { path: 'started', component: started },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'input', component: InputDemo },
        { path: 'grid', component: GridDemo },
        { path: 'page', component: PageDemo },
        { path: 'radio', component: RadioDemo },
      ]
    }
  ]
})