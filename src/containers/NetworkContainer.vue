<template>

  <InfoComponent :protocolParam="protocolParam"/>

</template>

<script>
  import InfoComponent from '../components/InfoComponent.vue'
  export default {
    name: 'NetworkContainer',
    data () {
      let protocolParam = {
        name: '选择名片',
        docUrl: 'http://wiki.syswin.com/pages/viewpage.action?pageId=21070186',
        protocol: 'toon://mwap/network',
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
