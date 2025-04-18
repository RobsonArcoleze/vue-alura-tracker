export enum TipoNotificacaoEnum {
  SUCCESS,
  DANGER,
  WARNING,
}

export interface INotificacao {
  titulo: string
  texto: string
  tipo: TipoNotificacaoEnum
  id: number
  time?: number
}
