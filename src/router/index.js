import Vue from 'vue'
import Router from 'vue-router'
import GoodList from './../views/goodList'
import Cart from './../views/cart'
import Address from './../views/address'
import OrderConfirm from './../views/orderConfirm'
import OrderSuccess from './../views/orderSuccess'

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
    },
    {
      path:'/address',
      component:Address
    },
    {
      path:'/orderConfirm',
      component:OrderConfirm
    },
    {
      path:'/orderSuccess',
      component:OrderSuccess
    }
  ]
})
