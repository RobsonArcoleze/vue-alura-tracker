<script setup lang="ts">
import { ref } from 'vue'
import Cronometro from './Cronometro.vue'

let contador = ref(0)
let intervalId = 0
let rodando = ref(false)

function iniciarContagen() {
  rodando.value = true
  intervalId = setInterval(() => {
    contador.value += 1
  }, 1000)
}

function finalizarContagem() {
  rodando.value = false
  clearInterval(intervalId)
  emit('temporizadorParado', contador.value)
  contador.value = 0
}

const emit = defineEmits<{
  (event: 'temporizadorParado', value: number): void
}>()
</script>

<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :segundos="contador" />
    <button class="button" @click="iniciarContagen()" :disabled="rodando">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="finalizarContagem()" :disabled="!rodando">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<style scoped></style>
