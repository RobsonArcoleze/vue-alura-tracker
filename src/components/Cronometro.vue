<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  segundos: number
}>()

const tempoDecorrido = computed(() => {
  return new Date(props.segundos * 1000).toISOString().slice(11, 19)
})
</script>

<template>
  <section>
    <strong> {{ tempoDecorrido }}</strong>
  </section>
</template>

<style scoped></style>
