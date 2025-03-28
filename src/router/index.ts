import Tarefas from '@/views/Tarefas.vue'
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const rotas: RouteRecordRaw[] = [
  {
    path: '',
    name: '/tarefas',
    component: Tarefas,
  },
]

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
})

export default roteador
