import Vue from 'vue'
import Router from 'vue-router'
import wenzhen from '../components/hyx/wenzhen.vue'
import zhushe from '../components/hyx/zhushe.vue'
import gdbt from '../components/hyx/gdbt.vue'
import gbkd from '../components/hyx/gbkd.vue'

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
    },
    {
      path: '/gbkd',
      name: 'gbkd',
      components: {default: gbkd}
    }
  ],
  mode: 'hash'
})

console.log(wenzhen)

export default router
