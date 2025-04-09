import Formulario from '@/views/Projetos/Formulario.vue'
import Projetos from '@/views/Projetos/Projetos.vue'
import Tarefas from '@/views/Tarefas.vue'
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const rotas: RouteRecordRaw[] = [
  {
    path: '',
    redirect: '/tarefas',
  },

  {
    path: '/tarefas',
    name: 'Tarefas',
    component: Tarefas,
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: Projetos,
  },
  {
    path: '/projetos/novo',
    name: 'Novo Projetos',
    component: Formulario,
  },
  {
    path: '/projetos/:id',
    name: 'Editar Projetos',
    component: Formulario,
    props: true,
  },
]

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
})

export default roteador
