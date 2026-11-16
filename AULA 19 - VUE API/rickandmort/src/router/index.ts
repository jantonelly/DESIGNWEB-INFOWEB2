import { createRouter, createWebHistory } from 'vue-router'
import RickAndMortyView from '@/views/RickAndMortyView.vue'
import EstadosView from '@/views/EstadosView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'rickandmorty',
      component: RickAndMortyView
    },
    {
    path: '/estados',
    name: 'estados',
    component: EstadosView
    }
  ],
})

export default router
