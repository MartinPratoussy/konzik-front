import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth';
import Home from '../views/HomeView.vue'
import Planning from '../views/PlanningView.vue'
import Event from '../views/EventView.vue'
import Profile from '../views/ProfileView.vue'
import Login from '../views/AuthView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/planning',
      name: 'planning',
      component: Planning
    },
    {
      path: '/event',
      name: 'event',
      component: Event
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
  ]
})

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const auth = useAuthStore()

  if (authRequired && !auth.user) {
      auth.returnUrl = to.fullPath
      return '/login'
  }
});

export default router
