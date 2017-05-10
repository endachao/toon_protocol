<template>
  <div class="HomeComponent container">

    <div class="row">
      <div class="col-md-12">
        <h3>toon 协议模块列表</h3>
      </div>
    </div>


    <div class="row">
      <div class="col-md-12">
        <a type="button" class="btn btn-info btn-lg btn-block">MWAP  模块</a>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <a type="button" class="btn btn-info btn-lg btn-block">名片列表	</a>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <a type="button" class="btn btn-info btn-lg btn-block">支付	</a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {

    name: 'HomeComponent',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row {
    margin-bottom: 20px;
  }
</style>
