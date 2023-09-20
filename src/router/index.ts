import { nextTick } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/ValuesTable.vue'),
    name: 'Main table',
  },
  {
    path: '/value/:id',
    component: () => import('@/views/ValueForm.vue'),
    name: 'Value Form',
  },
  {
    path: '/:url(.*)*',
    component: () => import('@/views/NotFound.vue'),
    name: 'Not Found',
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  nextTick(() => {
    document.title = to.name as string
  })
})
