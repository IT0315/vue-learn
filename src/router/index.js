import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Parents from '@/components/Parents'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/Parents',
      name:'Parents',
      component:Parents
    }
  ]
})
