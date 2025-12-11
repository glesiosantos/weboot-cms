import type { NavigationGuard } from 'vue-router'

const authGuard: NavigationGuard = (to, from, next) => {
  const token = localStorage.getItem('token')

  if (!token) {
    return next({ name: 'login' })
  }

  next()
}

export default authGuard
