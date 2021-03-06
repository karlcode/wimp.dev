import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Preview from './views/Preview.vue'
import BlogHome from './views/BlogHome.vue'
import Post from './views/Post.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  },
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   redirect: { name: 'blog-home' }
    // },
    {
      path: '/',
      name: 'blog-home',
      component: BlogHome
    },
    {
      path: '/blog/:uid',
      name: 'post',
      component: Post
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ],
})
