// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'



Vue.use(VueRouter);
Vue.use(VueResource);

import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import sellers from 'components/sellers/sellers'

import './common/sass/icon.css'
import './common/sass/base.css'

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/sellers', component: sellers },
]

const router = new VueRouter({
  linkActiveClass: 'active',
  mode:'history',
  routes // （缩写）相当于 routes: routes
})

router.push('/goods')

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

const app = new Vue({
  // el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
