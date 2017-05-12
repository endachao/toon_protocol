import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import HomeContainer from '../containers/HomeContainer.vue'
import PayContainer from '../containers/PayContainer.vue'
import ToonWapContainer from '../containers/ToonWapContainer.vue'
import CardContainer from '../containers/CardContainer.vue'

// mwap container
import GPSContainer from '../containers/GPSContainer.vue'
import MAPContainer from '../containers/MAPContainer.vue'
import NetworkContainer from '../containers/NetworkContainer.vue'
import PhotoContainer from '../containers/PhotoContainer.vue'
import VibrateContainer from '../containers/VibrateContainer.vue'

import RegisterContainer from '../containers/RegisterContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
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
    },
    {
      path: '/gps',
      name: 'gps',
      component: GPSContainer
    },
    {
      path: '/map',
      name: 'map',
      component: MAPContainer
    },
    {
      path: '/network',
      name: 'network',
      component: NetworkContainer
    },
    {
      path: '/photo',
      name: 'photo',
      component: PhotoContainer
    },
    {
      path: '/vibrate',
      name: 'vibrate',
      component: VibrateContainer
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterContainer
    }
  ]
})
