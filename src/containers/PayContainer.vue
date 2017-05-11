<template>
  <div class="PayContainer">
    <InfoComponent :protocolParam="protocolParam"/>
  </div>
</template>

<script>
  import InfoComponent from '../components/InfoComponent.vue'
  export default {
    name: 'PayContainer',
    data () {
      let args = {
        'buyerId': '123',
        'buyerType': '01',
        'userVcard': 'c_1010089',
        'userVcardName': '名称',
        'mobile': '买家手机号',
        'sellerId': '124',
        'sellerType': '01',
        'sellerVcard': 'c_1010039',
        'sellerVcardName': '卖家名称',
        'sellerMobile': '18611536224',
        'tradeType': 'normal',
        'merNo': '101003',
        'txAmount': '300',
        'outOrderNo': '10001',
        'body': '商品名称',
        'subject': '商品描述',
        'extrInfo': '商品描述',
        'notifyUrl': 'http://myappserver/callback',
        'txTime': '149449448600'
      }

      let protocolParam = {
        name: '现金收银台',
        docUrl: 'http://wiki.syswin.com/pages/viewpage.action?pageId=23594148',
        protocol: 'toon://toonpay/checkoutPayCash',
        params: {args: args}
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
