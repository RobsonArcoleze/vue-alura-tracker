<script setup lang="ts">
import { ref } from 'vue'
import BarraLateral from './components/BarraLateral.vue'
import Formulario from './components/Formulario.vue'
import Tarefa from './components/Tarefa.vue'
import type { ITarefa } from './interface/ITarefa'

const tarefas = ref<ITarefa[]>([])
const descricao = ref<string>('')
const segundos = ref<number>(0)

function adcionarTarefa() {
  if (descricao.value && segundos.value > 0) {
    tarefas.value.push({
      descricao: descricao.value,
      segundos: segundos.value,
    })
    descricao.value = ''
    segundos.value = 0
  }
}

function excluirTarefa(tarefa: ITarefa) {
  tarefas.value = tarefas.value.filter((tar) => tar.descricao != tarefa.descricao)
  console.log(tarefa)
}
</script>

<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <Formulario
        @descricao-emitida="descricao = $event"
        @tempo-segundos="segundos = $event"
        @adcionar-tarefa="adcionarTarefa"
      />
      <div class="lista" v-for="tar in tarefas" :key="tar.descricao">
        <Tarefa
          v-if="tar.descricao !== '' && tar.segundos > 0"
          :descricao="tar.descricao"
          :segundos="tar.segundos"
          @exclui-tarefa="excluirTarefa"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.lista {
  padding: 1.25rem;
}

main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.dark {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}

/* Aqui é para deixar no modo claro */
.conteudo {
  background-color: var(--bg-primario);
}
</style>
