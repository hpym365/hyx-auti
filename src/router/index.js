import Vue from 'vue'
import Router from 'vue-router'
import wenzhen from '../components/hyx/wenzhen.vue'
import zhushe from '../components/hyx/zhushe.vue'
import gdbt from '../components/hyx/gdbt.vue'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/wenzhen'
    },
    {
      path: '/wenzhen',
      name: 'wenzhen',
      components: {default: wenzhen}
    },
    {
      path: '/zhushe',
      name: 'zhushe',
      components: {default: zhushe}
    },
    {
      path: '/gdbt',
      name: 'gdbt',
      components: {default: gdbt}
    }
  ],
  mode: 'history'
})

console.log(wenzhen)

export default router
