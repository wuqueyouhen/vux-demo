import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import HelloFromVux from '../components/HelloFromVux'
import Notify from '../dfs/Notify'
import About from '../dfs/About'
import OrderDetail from '../dfs/leader/OrderDetail'
import Login from '../dfs/Login'
import LeaderView from '../dfs/LeaderView.vue'
import LeaderIndex from '../dfs/leader/Index'
import ManagerView from '../dfs/ManagerView.vue'
import ManagerIndex from '../dfs/manager/Index'
import WorkerView from '../dfs/WorkerView.vue'
import WorkerIndex from '../dfs/worker/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/lv',
      component: LeaderView,
      children:[
        {
          path:'/',
          component: LeaderIndex
        },{
          path: 'notify',
          component: Notify
        },
        {
          path: 'about',
          component: About
        },{
          path: 'orderdetail',
          component: OrderDetail
        },
      ]
    },
    {
      path: '/mv',
      component: ManagerView,
      children:[
        {
          path:'/',
          component: ManagerIndex
        },{
          path: 'notify',
          component: Notify
        },
        {
          path: 'about',
          component: About
        },
        {
          path: 'orderdetail',
          component: OrderDetail
        },
      ]
    },
    {
      path: '/wv',
      component: WorkerView,
      children:[
        {
          path:'/',
          component: WorkerIndex
        },{
          path: 'notify',
          component: Notify
        },
        {
          path: 'about',
          component: About
        }
      ]
    },
    {
      //vue
      path: '/testvue',
      name: 'Hello',
      component: Hello
    },
    {
      //vux
      path: '/testvux',
      component: HelloFromVux
    }
  ]
})
