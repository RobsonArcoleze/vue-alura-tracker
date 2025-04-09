<script setup lang="ts">
import { ref } from 'vue'
import Temporizador from './Temporizador.vue'
import { useProjetoStore } from '@/store'
import type { ITarefa } from '@/interface/ITarefa'

let descricao = ref<string>('')
const idProjeto = ref<string>('')
const store = useProjetoStore()

const emits = defineEmits<{
  (event: 'descricaoEmitida', value: string): void
  (event: 'tempoSegundos', value: number): void
  (event: 'adcionarTarefa'): void
  (event: 'aoSalvarTarefa', value: ITarefa): void
}>()

function finalizarTarefa(segundos: number): void {
  emits('aoSalvarTarefa', {
    descricao: descricao.value,
    segundos: segundos,
    projeto: store.projetos.find((proj) => proj.id == idProjeto.value),
  })
  emits('descricaoEmitida', descricao.value)
  emits('tempoSegundos', segundos)
  emits('adcionarTarefa')
  descricao.value = ''
}
</script>

<template>
  <div class="box">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa!">
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricao"
        />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option>Selecione o projeto</option>
            <option v-for="projeto in store.projetos" :key="projeto.id" :value="projeto.id">
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <Temporizador @temporizador-parado="finalizarTarefa($event)" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
