<template>
  <div class="GPSContainer">
    <InfoComponent :protocolParam="protocolParam"/>
  </div>

</template>

<script>
  import InfoComponent from '../components/InfoComponent.vue'

  export default {
    name: 'GPSContainer',
    data () {
      let protocolParam = {
        name: 'GPS 定位',
        docUrl: 'http://wiki.syswin.com/pages/viewpage.action?pageId=21070183#mwap模块-获取手机gps信息(普通定位)(3.1.9)',
        protocol: 'toon://mwap/gps',
        params: {'functionType': '0'}
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
