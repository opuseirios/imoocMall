import Vue from 'vue'
import Router from 'vue-router'
import GoodList from './../views/goodList'
import Cart from './../views/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: GoodList
    },
    {
      path:"/cart",
      component:Cart
    }
  ]
})
