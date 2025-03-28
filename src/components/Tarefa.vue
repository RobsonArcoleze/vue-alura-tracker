<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Cronometro from './Cronometro.vue'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import type { ITarefa } from '@/interface/ITarefa'

const props = defineProps<{
  descricao: string
  segundos: number
}>()

const emits = defineEmits<{
  (event: 'excluiTarefa', value: ITarefa): void
}>()

function excluiTarefa() {
  const obj: ITarefa = {
    descricao: props.descricao,
    segundos: props.segundos,
  }
  emits('excluiTarefa', obj)
}
</script>

<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">{{ props.descricao }}</div>
      <div class="column">
        <Cronometro :segundos="props.segundos" />
      </div>
      <div class="column">
        <button class="btn-delete" @click="excluiTarefa">
          <FontAwesomeIcon :icon="faTrash" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  background: #0d3b66;
}

.btn-delete {
  background: none;
  border: none;
  cursor: pointer;
  color: red;
  font-size: 1.5rem;
}

.btn-delete:hover {
  color: darkred;
}
</style>
