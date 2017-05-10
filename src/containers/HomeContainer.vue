<template>
  <div class="HomeContainer">
    <HomeComponent/>
  </div>
</template>

<script>
  import HomeComponent from '../components/HomeComponent.vue';

  export default {
    name: 'HomeContainer',
    data () {
      return {}
    },
    components: {
      HomeComponent
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
