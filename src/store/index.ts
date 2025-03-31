import type IProjetos from '@/interface/IProjeto'
import { defineStore } from 'pinia'

interface Estado {
  projetos: IProjetos[]
}

export const useProjetoStore = defineStore('projeto', {
  state: (): Estado => ({
    projetos: [],
  }),
  getters: {},
  actions: {
    insertProjeto(nome: string) {
      this.projetos.push({
        id: new Date().toISOString(),
        nome: nome,
      })
    },
  },
})
