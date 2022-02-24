import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

const beforeAuth = isAuth => (from, to, next) => {
  const token = store.state.accessToken
  if (token === undefined || token === '') {
    alert('로그인이 필요한 서비스입니다.')
    next('/login')
  } else {
    return next()
  }
}

const isLogin = isAuth => (from, to, next) => {
  const token = store.state.accessToken
  if (token !== undefined && token !== '') {
    next('/login')
  } else {
    return next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    beforeEnter: beforeAuth(true)
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login'),
    beforeEnter: isLogin(true)
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/logout')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/account')
  },
  {
    path: '/md',
    name: 'md',
    component: () => import('../views/md')
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('../views/sign')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('../views/upload')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
