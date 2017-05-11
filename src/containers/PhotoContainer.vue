<template>

  <InfoComponent :protocolParam="protocolParam"/>

</template>

<script>
  import InfoComponent from '../components/InfoComponent.vue'
  export default {
    name: 'CardContainer',
    data () {
      let params = {
        'flagId': '334',
        'functionType': 0,
        'nameSpace': 'demo.systoon.com',
        'aspectX': 3,
        'aspectY': 4,
        'xLength': 300,
        'yLength': 400,
        'type': 0,
        'ratio': 0.3
      }

      let protocolParam = {
        name: '选择图片',
        docUrl: 'http://wiki.syswin.com/pages/viewpage.action?pageId=21070183#mwap模块-获取单张图片(3.1.9)',
        protocol: 'toon://mwap/photo',
        params: params
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
