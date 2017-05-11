<template>

  <InfoComponent :protocolParam="protocolParam"/>

</template>

<script>
  import InfoComponent from '../components/InfoComponent.vue'
  export default {
    name: 'CardContainer',
    data () {
      let protocolParam = {
        name: '手机振动',
        docUrl: 'http://wiki.syswin.com/pages/viewpage.action?pageId=21070183#mwap模块-手机振动(3.1.9)',
        protocol: 'toon://mwap/vibrate',
        params: {}
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
