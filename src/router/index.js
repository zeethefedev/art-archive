import MangaListView from '@/views/MangaListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'manga-list',
      component: MangaListView
    },
    {
      path: '/browse',
      name: 'browse',
      component: () => import('../views/BrowseView.vue')
    },
    {
      path: '/manga/:id',
      name: 'mange-detail',
      component: () => import('../views/MangaDetailView.vue')
    }
  ]
})

export default router
