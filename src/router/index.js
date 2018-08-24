import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'

import SwiperDemo from '@/components/pages/SwiperDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'ShoppingMall', component: ShoppingMall},
    {path: '/swiperdemo', name: 'SwiperDemo', component: SwiperDemo}
  ]
})
