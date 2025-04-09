<script setup lang="ts">
import type IProjetos from '@/interface/IProjeto'
import roteador from '@/router'
import { useProjetoStore } from '@/store'
import { onMounted, ref } from 'vue'

const nomeDoProjeto = ref<string>('')
const projetos = ref<IProjetos[]>([])
const store = useProjetoStore()

const props = defineProps<{
  id: string
}>()

onMounted(() => {
  if (props.id) {
    const project = store.projetos.find((proj) => proj.id == props.id)
    nomeDoProjeto.value = project?.nome || ''
  }
})

function salvar() {
  if (props.id) {
    store.editProjeto({
      id: props.id,
      nome: nomeDoProjeto.value,
    })
  } else {
    store.insertProjeto(nomeDoProjeto.value)
  }

  const projeto: IProjetos = {
    id: new Date().toISOString(),
    nome: nomeDoProjeto.value,
  }

  projetos.value.push(projeto)

  nomeDoProjeto.value = ''
  roteador.push('/projetos')
}
</script>

<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">Nome do Projeto</label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
          placeholder="Nome do Projeto"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<style scoped>
.projetos {
  padding: 1.5rem;
}
</style>
