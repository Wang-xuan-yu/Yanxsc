<template>
  <div>
      <!-- 组件切换的地方 -->
      <div class="page">
          <router-view></router-view>
      </div>
    <!-- 底部tabbar -->
    <van-tabbar route active-color="#A00000">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/fei">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/shop" :badge="this.$store.state.nums">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/person">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
</style>
