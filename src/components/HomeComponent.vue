<template>
  <div class="HomeComponent container">

    <div class="row">
      <div class="col-md-12">
        <h3>{{ infoTitle }}</h3>
      </div>
    </div>

    <div class="row" v-for="item in buttonList">
      <div class="col-md-12">
        <router-link type="button" class="btn btn-info btn-lg btn-block" :to="item.route">{{ item.name }}</router-link>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HomeComponent',
    data () {
      return {}
    },
    props: ['buttonList', 'infoTitle']
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row {
    margin-bottom: 20px;
    text-align: center;
  }
</style>
