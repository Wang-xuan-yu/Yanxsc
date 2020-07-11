<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <Loading v-if="isLoading"></Loading>
  </div>
</template>

<script>
export default {
  name: 'App',
data() { 
    return {

    }
  },
  props: [

  ],
  components:{
  },
 computed:{
     isLoading() {
      return this.$store.state.isLoading;
    }
 },
  mounted() {

  },
  methods:{

  },
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
