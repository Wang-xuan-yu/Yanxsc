<template>
  <div class="box">
      <navBar :title="'我的订单'"></navBar>
      <div class="item" v-for="(item,index) in goodsMap" :key="index">
          <p>查看订单</p>
          <van-card :num="it.number" :thumb="it.pic" :title="it.goodsName" :price="it.amount" v-for="(it,i) in item" :key="i"/>
      </div>
  </div>
</template>

<script>
import storage from "@/utils/storage";
import navBar from "@/components/common/head";
export default {
  name: '',
  mounted() {
      this.getOrderList();
  },
  data() {
    return {
        goodsMap:[]
    };
  },
  components:{
      navBar
  },
  methods: {
      getOrderList(){
          let user =storage.get("09A_user",true);

          let formtdata = new FormData();

          formtdata.append("token",user.token);

          this.$axios.post("https://api.it120.cc/small4/order/list",formtdata)
          .then(res=>{
              console.log(res);
              this.goodsMap = res.data.goodsMap;
          })
      }
  },
};
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    background-color: #F0F0F0;
    .item{
         margin-bottom: .2rem;
         background: #FFF;
         width: 100%;
    }
}
</style>
