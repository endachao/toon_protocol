<template>
  <div class="HomeContainer">
    <HomeComponent :buttonList="homeList" infoTitle='Toon 协议模块列表'/>
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
          name: '选择名片',
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
