// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
//下面这两行是加 element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Index from './components/index/myindex'
import Login from './components/login/logintest'


//加axios
import axios from 'axios'
//import VueAxios from 'vue-axios'
// 上面这个vue-axios是过来帮忙使用 axios的，
// 如果不写他和下面的vue.use(vueaxios)，
// 那就要挨个文件写import axios from 'axios'


//或者，写上Vue.prototype.$ajax= axios也行
//用：
// this.$ajax.get('api/getNewsList').then((response)=>{
//   this.newsList=response.data.data;
// }).catch((response)=>{
//   console.log(response);
// })
import Test from '@/components/fancyeffect/test'

//import Login from './components/login/login'
//main.js 和 components是平级的  要写 ./ ！！！！！！ 不要忘记！！！


Vue.use(Element);
Vue.config.productionTip = false;
//Vue.use(VueAxios,axios);
Vue.prototype.$ajax= axios;
axios.defaults.baseURL="http://localhost:8082/api";
//这个是固定的，后台已经写好在8082了
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { Index },
  // template: '<Index/>'
  //render:h=>h(Index)
  //render:h=>h(Test)
  render:h=>h(Login)
  //要是该首页就是   render:h=>h(myindex)

})
