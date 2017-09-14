import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Persons from '@/components/Persons'
import MaterialPersons from '@/components/MaterialPersons'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Persons',
      component: Persons
    },
    {
      path: '/material-persons',
      name: 'MaterialPersons',
      component: MaterialPersons
    },{
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
