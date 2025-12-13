import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
// import authGuard from './guards/authGuard'

const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/pages/auth/LoginPage.vue')
      }
      // {
      //   path: 'token',
      //   name: 'token',
      //   component: () => import('@/pages/auth/Token.vue')
      // }
    ]
  },

  {
    path: '/',
    component: () => import('@/layouts/AdminLayout.vue'),
    // beforeEnter: authGuard,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/pages/admin/dashboard/DashboardPage.vue')
      },
      {
        path: 'users',
        name: 'users',
        component: () => import('@/pages/admin/user/UsersPage.vue')
      }
    ]
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: '/auth/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
