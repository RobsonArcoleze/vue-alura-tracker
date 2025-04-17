import Formulario from '@/views/Projetos/Formulario.vue'
import Lista from '@/views/Projetos/Lista.vue'
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
    component: Projetos,
    children: [
      {
        path: '',
        name: 'Lista',
        component: Lista,
      },
      {
        path: 'novo',
        name: 'Novo Projetos',
        component: Formulario,
      },
      {
        path: ':id',
        name: 'Editar Projetos',
        component: Formulario,
        props: true,
      },
    ],
  },
]

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
})

export default roteador
