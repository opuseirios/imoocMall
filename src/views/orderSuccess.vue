<template>
    <div class='orderSuccess'>
      <main-header></main-header>
      <div class="container">
        <div class="page-title-normal">
          <h2 class="page-title-h2"><span>check out</span></h2>
        </div>
        <!-- 进度条 -->
        <div class="check-step">
          <ul>
            <li class="cur"><span>Confirm</span> address</li>
            <li class="cur"><span>View your</span> order</li>
            <li class="cur"><span>Make</span> payment</li>
            <li class="cur"><span>Order</span> confirmation</li>
          </ul>
        </div>

        <div class="order-create">
          <div class="order-create-pic"><img src="./../../static/ok-2.png" alt=""></div>
          <div class="order-create-main">
            <h3>Congratulations! <br>Your order is under processing!</h3>
            <p>
              <span>Order ID：{{orderId}}</span>
              <span>Order total：{{orderTotal}}</span>
            </p>
            <div class="order-create-btn-wrap">
              <div class="btn-l-wrap">
                <router-link to="/cart" class="btn btn--m">Cart List</router-link>
              </div>
              <div class="btn-r-wrap">
                <router-link to="/" class="btn btn--m">Goods List</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav-footer></nav-footer>
    </div>
</template>

<script>
    import MainHeader from "../components/header/header";
    import NavBread from "../components/navBread/navBread";
    import NavFooter from "../components/navFooter/navFooter";
    import axios from 'axios'

    export default {
      components: {
        NavFooter,
        NavBread,
        MainHeader},
      name: 'order-success',
      data(){
        return{
          orderId:'',
          orderTotal:0
        }
      },
      mounted(){
        var orderId = this.$route.query.orderId;
        if(!orderId){
          return;
        }
        axios.get('/users/orderDetail',{
          params:{
            orderId
          }
        }).then((response)=>{
          let res = response.data;
          if(res.status==='0'){
            this.orderId = orderId;
            this.orderTotal = res.result.orderTotal;
          }
        })
      }
    }
</script>

<style lang='scss' scoped>

</style>
