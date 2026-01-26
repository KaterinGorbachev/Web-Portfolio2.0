import { createRouter, createWebHistory } from 'vue-router'
import { useAccessStore } from '@/stores/access'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: () => import('@/views/PresentationView.vue')},
    {path: '/studies', component: () => import('@/views/StudiesView.vue')},
    {path: '/projects', component: () => import('@/views/ProjectsView.vue')},
    {path: '/access', component: () => import('@/views/AccessView.vue')},
    {
      path: '/recordadmin',
      component: () => import('@/views/RecordinfoView.vue'),
      meta: {requiresAdmin: true}
    }
  ],
})

router.beforeEach( (to, next) => {
  if (to.meta.requiresAdmin){

    let accessStore = useAccessStore()

    if(accessStore.admin){
      next()
    } else {
      next('/access')
    }
  } else {
    next()
  }
})

export default router
