import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import HomeContainer from '../containers/HomeContainer.vue'
import PayContainer from '../containers/PayContainer.vue';
import ToonWapContainer from '../containers/ToonWapContainer.vue';
import CardContainer from '../containers/CardContainer.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HomeContainer
    },
    {
      path: '/wap',
      name: 'wap',
      component: ToonWapContainer
    },
    {
      path: '/card',
      name: 'card',
      component: CardContainer
    },
    {
      path: '/pay',
      name: 'pay',
      component: PayContainer
    }
  ]
});
