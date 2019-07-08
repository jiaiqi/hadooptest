import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/app'
import data from '@/pages/data'
import home from '@/pages/home'
import oneCardPass from '@/pages/oneCardPass'
import hData from '@/pages/hData'
import hadoop1 from '@/pages/hadoop'
import hadoop from '@/pages/hadoop/test1'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/data',
      name: 'data/',
      component: index
    },
    {
      path: '/data/:user',
      name: 'data',
      component: data
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/one-card-pass/:user',
      name: 'one-card-pass',
      component: oneCardPass
    },
    {
      path: '/hdata',
      name: 'h-data',
      component: hData
    },
    {
      path: '/hadoop1',
      name: 'hadoop1',
      component: hadoop1
    },
    {
      path: '/hadoop',
      name: 'hadoop',
      component: hadoop

    }
  ]
})
