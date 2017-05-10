<template>
  <div class="InfoComponent container">
    <h3>{{ protocolParam.name }}</h3>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>路径</th>
        <th>文档</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{protocolParam.protocol}}</td>
        <td>
          <a :href=" protocolParam.docUrl" target="_blank">
            {{ protocolParam.name }}
          </a>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <code>
            {{protocolParam.protocol}}?params={{ protocolParam.params }}
          </code>
        </td>
      </tr>
      </tbody>
    </table>

    <button type="button" class="btn btn-info btn-lg btn-block" v-on:click="sendRequest">尝试一下</button>

    <div class="response">
      {{protocolParam.protocol}}
      {{ response }}
    </div>

  </div>
</template>

<script>
  import ToonProtocol from '../services/ToonProtocol'

  export default {
    name: 'InfoComponent',
    data () {
      return {
        response: ''
      }
    },
    props: ['protocolParam'],
    methods: {
      sendRequest: function () {
        var protocol = new ToonProtocol(this.protocolParam.protocol, this.protocolParam.params)
        console.log(protocol)

        protocol.send()
          .then((res) => {
            console.log('res', res)
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .response {
    border: 1px solid #ddd;
    margin-top: 20px;
    margin-bottom: 20px;
    min-height: 40px;
    padding-top: 5px;
    background-color: #0f0f0f;
    color: #ffffff;
    padding-left: 5px;
  }
</style>
