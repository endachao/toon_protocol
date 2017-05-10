import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import HomeComponent from '../containers/HomeContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HomeComponent
    }
  ]
});
