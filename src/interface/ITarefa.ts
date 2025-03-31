import type IProjetos from './IProjeto'

export interface ITarefa {
  descricao: string
  segundos: number
  projeto?: IProjetos
}
