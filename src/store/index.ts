import type { INotificacao } from '@/interface/INotificacao'
import type IProjetos from '@/interface/IProjeto'
import { defineStore } from 'pinia'

interface Estado {
  projetos: IProjetos[]
  notificacoes: INotificacao[]
}

export const useProjetoStore = defineStore('projeto', {
  state: (): Estado => ({
    projetos: [],
    notificacoes: [],
  }),
  getters: {},
  actions: {
    editProjeto(projeto: IProjetos) {
      const index = this.projetos.findIndex((proj) => proj.id == projeto.id)
      this.projetos[index] = projeto
    },

    insertProjeto(nome: string) {
      this.projetos.push({
        id: new Date().toISOString(),
        nome: nome,
      })
    },

    removeProjeto(id: string) {
      this.projetos = this.projetos.filter((proj) => proj.id !== id)
    },

    removerNotificaca(id: number) {
      this.notificacoes = this.notificacoes.filter((not) => not.id !== id)
    },

    notificar(notificacao: INotificacao) {
      this.notificacoes.push(notificacao)
    },
  },
})
