import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import HelloFromVux from '../components/HelloFromVux'

import Index from '../dfs/Index'
import Notify from '../dfs/Notify'
import About from '../dfs/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/notify',
      component: Notify
    },
    {
      path: '/about',
      component: About
    },
    {
      //vue
      path: '/testvue/',
      name: 'Hello',
      component: Hello
    },
    {
      //vux
      path: '/testvux/',
      component: HelloFromVux
    }
  ]
})
