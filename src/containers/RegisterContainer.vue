<template>
  <div class="RegisterContainer">
    <p>
      toon 协议 Demo , toon 应用开发者必备
    </p>
    <button type="button" class="btn btn-info btn-lg btn-block" v-on:click="register">添加</button>
  </div>
</template>

<script>
  let href = location.href
  import tools from '../helpers/tools'
  export default {
    name: 'RegisterContainer',
    data () {
      return {}
    },
    components: {},
    methods: {
      register: function () {
        console.log(tools.getQueryStringByName(href, 'key'))
        console.log(encodeURIComponent(tools.getQueryStringByName(href, 'key')))
        window.location.href = `http://${tools.server_uri}/auth/code?key=` + encodeURIComponent(tools.getQueryStringByName(href, 'key'))
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .RegisterContainer {
    text-align: center;
  }
</style>
