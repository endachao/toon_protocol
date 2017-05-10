<template>
  <div class="HomeContainer">
    <HomeComponent :buttonList="homeList"/>
  </div>
</template>

<script>
  import HomeComponent from '../components/HomeComponent.vue';

  export default {
    name: 'HomeContainer',
    data () {
      let homeList = [
        {
          name: 'MWAP  模块',
          route: {name: 'wap'}
        },
        {
          name: '名片列表',
          route: {name: 'card'}
        },
        {
          name: '支付',
          route: {name: 'pay'}
        }
      ];
      return {
        homeList: homeList
      }
    },
    components: {
      HomeComponent
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
