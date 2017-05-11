<template>
  <div class="ToonWapContainer">
    <HomeComponent :buttonList="homeList" infoTitle='MWAP 列表'/>
  </div>
</template>

<script>
  import HomeComponent from '../components/HomeComponent.vue'
  export default {
    name: 'HomeContainer',
    data () {
      let homeList = [
        {
          name: '选择图片',
          route: {name: 'photo'}
        },
        {
          name: '手机震动',
          route: {name: 'vibrate'}
        },
        {
          name: '检测网络',
          route: {name: 'network'}
        },
        {
          name: 'GPS 定位',
          route: {name: 'gps'}
        },
        {
          name: '跳转地图',
          route: {name: 'map'}
        }
      ]
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
