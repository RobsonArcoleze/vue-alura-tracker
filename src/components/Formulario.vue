<script setup lang="ts">
import { ref } from 'vue'
import Temporizador from './Temporizador.vue'

let descricao = ref<string>('')
const emits = defineEmits<{
  (event: 'descricaoEmitida', value: string): void
  (event: 'tempoSegundos', value: number): void
  (event: 'adcionarTarefa'): void
}>()

function finalizarTarefa(segundos: number): void {
  emits('descricaoEmitida', descricao.value)
  emits('tempoSegundos', segundos)
  emits('adcionarTarefa')
  descricao.value = ''
}
</script>

<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa!">
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricao"
        />
      </div>
      <div class="column">
        <Temporizador @temporizador-parado="finalizarTarefa($event)" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
