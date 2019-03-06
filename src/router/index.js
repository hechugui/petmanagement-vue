import Vue from 'vue'
import Router from 'vue-router'
//import Login from '@/components/login/login'
import thenewindex from '@/components/index/myindex'
import Test from '@/components/fancyeffect/test'

Vue.use(Router)

export default new Router({
  routes: [{
    path:'/thenewindex',
    component:thenewindex
  }
    // {
    //   path:'/',
    //   name:'Login',
    //   component:Login
      // //下面这个path没用，用来做范例的
      // path: '/index/:id',
      // name: 'Index',
      // component:Index,
      // children:[
      //   {
      //     path: 'user1',
      //     component: user1
      //   },{
      //     path: 'user2',
      //     component: user1
      //   },{
      //   path:'',
      //     component:user1
      //   }
      // ]
    // },{
    // path:'/test',
    //   name:'test',
    //   component:Test
    // }


  ]
})
