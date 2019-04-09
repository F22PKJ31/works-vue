import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/works'
    },
    {
      path: '/works',
      redirect: '/works/painting',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: {title: '自述文件'},
      children: [
        {
          path: 'painting',
          component: resolve => require(['../components/page/PaintingTable.vue'], resolve),
          meta: {title: '摸鱼'}
        }]
    }
  ]
})
