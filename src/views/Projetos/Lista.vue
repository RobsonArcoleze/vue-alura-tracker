<script setup lang="ts">
import { TipoNotificacaoEnum } from '@/interface/INotificacao'
import type IProjetos from '@/interface/IProjeto'
import { useProjetoStore } from '@/store'

const store = useProjetoStore()

function removerProjeto(projeto: IProjetos) {
  store.removeProjeto(projeto.id)
  store.notificar({
    id: new Date().getTime(),
    texto: `Projeto ${projeto.nome} foi excluido!`,
    titulo: 'Cuidado!',
    tipo: TipoNotificacaoEnum.DANGER,
    time: 10000,
  })
}
</script>

<template>
  <section>
    <RouterLink to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo Projeto</span>
    </RouterLink>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in store.projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
          <td>
            <RouterLink :to="`/projetos/${projeto.id}`" class="button">
              <span class="icon is-small"><i class="fas fa-pencil-alt"></i></span>
            </RouterLink>
            <button type="button" class="button is-danger is-dark" @click="removerProjeto(projeto)">
              <span class="icon is-small"><i class="fa-solid fa-xmark"></i></span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.button {
  margin: 2px;
}
</style>
