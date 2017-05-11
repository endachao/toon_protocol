<template>

  <InfoComponent :protocolParam="protocolParam"/>

</template>

<script>
  import InfoComponent from '../components/InfoComponent.vue'
  export default {
    name: 'CardContainer',
    data () {
      let protocolParam = {
        name: '跳转地图',
        docUrl: 'http://wiki.syswin.com/pages/viewpage.action?pageId=21070183#mwap模块-跳转地图(3.1.9)',
        protocol: 'toon://mwap/map',
        params: {'latitude': '39.999', 'longitude': '116.451'}
      }
      return {
        protocolParam: protocolParam
      }
    },
    components: {
      InfoComponent
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
