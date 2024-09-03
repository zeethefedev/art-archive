import ArtListView from '@/views/ArtListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'art-list',
      component: ArtListView
    },
    {
      path: '/browse',
      name: 'browse',
      component: () => import('../views/BrowseView.vue')
    },
    {
      path: '/art/:id',
      name: 'art-detail',
      component: () => import('../views/ArtDetailView.vue')
    },
    {
      path: '/my-artworks',
      name: 'my-artworks',
      component: () => import('../views/MyArtworkView.vue')
    }
  ]
})

export default router
