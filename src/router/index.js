import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutOnly.vue'),
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/ExperienceOnly.vue'),
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/EducationOnly.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsOnly.vue'),
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsOnly.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactOnly.vue'),
    },
  ],
})

export default router
