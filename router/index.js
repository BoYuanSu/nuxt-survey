import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/index.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/store',
        component: () => import('~/pages/store').then(m=>m.default)
      },
      {
        path: '/lifecycle',
        component: () => import('~/pages/lifecycle').then(m=>m.default)
      },
      {
        path: '/users',
        component: () => import('~/pages/users').then(m=>m.default),
        children: [
            {
                path: ':uid',
                component: () => import('~/pages/users/_uid.vue').then(m=>m.default)
            }
        ]
      },
      {
        path: '/bugs',
        component: () => import('~/pages/bugs').then(m=>m.default)
      },
      {
          path: '*',
          component: () => import('~/pages/_.vue').then(m=>m.default),

      }
    ]
  })
}
