<template>
  <div>
    <van-swipe :show-indicators="dy_flag" class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in dy_List" :key="index">
        <img :src="item.picUrl" alt />
      </van-swipe-item>
    </van-swipe>

    <ul class="dy-ul">
      <li>
        <img src="/static/img/1.png" alt />
        <p>签到</p>
      </li>
      <li>
        <img src="/static/img/2.png" alt />
        <p>礼券</p>
      </li>
      <li @click="tog()">
        <img src="/static/img/3.png" alt />
        <p>砍价</p>
      </li>
      <li>
        <img src="/static/img/4.png" alt />
        <p>专栏</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      dy_List: [],
      dy_flag: false
    };
  },
  props: [],
  components: {},
  mounted() {
    this.$axios.get("https://api.it120.cc/small4/banner/list").then((res)=>{
      console.log(res.data)
      this.dy_List=res.data
    })
  },
  methods: {
    tog(){
      this.$router.push({
        path:"/Kanj",
      })
    }
  }
};
</script>

<style scoped lang="scss">
.my-swipe .van-swipe-item {
  width: 100%;
  // height: 100px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
}
.dy-ul{
    display: flex;
    background: #fff;
    position: absolute;
    top: 266px;
    right: 0;
    width: 100%;
    height: 100px;
    border-radius: 40px 40px 0px 0px;
    left: 0;
    justify-content: space-around;
    align-items: center;
    border-bottom: 0.2rem solid #F5F5F5;
    li{
      text-align: center;
        img{
            width: 40px;
            height: 40px;
        }
        p{
          margin-top: 20px;
          font-size: 18px;
        }
    }
}
</style>