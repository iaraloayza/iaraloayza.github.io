import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectDetails from '@/views/ProjectDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/projeto/:id',
    name: 'ProjectDetails',
    component: ProjectDetails,
    meta: {
      title: 'Detalhes do Projeto'
    },
    beforeEnter: (to, from, next) => {
      const projectId = parseInt(to.params.id)
      // Verificar se o ID do projeto é válido (1-7 baseado nos projetos existentes)
      if (projectId >= 1 && projectId <= 7) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Guard global para atualizar o título da página
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Portfólio - Ana Loayza'
  next()
})

export default router