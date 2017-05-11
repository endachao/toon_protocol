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
      <pre class="pre">{{ response }}</pre>
    </div>

  </div>
</template>

<script>
  import ToonProtocol from '../services/ToonProtocol'

  export default {
    name: 'InfoComponent',
    data () {
      return {
        response: '响应'
      }
    },
    props: ['protocolParam'],
    methods: {
      sendRequest: function () {
        this.response = '请求数据中...'
        let protocol = new ToonProtocol(this.protocolParam.protocol, this.protocolParam.params)
        protocol.send()
          .then((res) => {
            this.response = res
            console.log('res', res)
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pre {
    border: 1px solid #ddd;
    margin-top: 20px;
    margin-bottom: 20px;
    min-height: 40px;
    padding-top: 10px;
    background-color: #0f0f0f;
    color: #ffffff;
    padding-left: 5px;
  }
</style>
