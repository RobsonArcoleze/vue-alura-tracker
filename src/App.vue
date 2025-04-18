<script setup lang="ts">
import BarraLateral from './components/BarraLateral.vue'
import Notificacoes from './components/Notificacoes.vue'
</script>

<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <Notificacoes />
      <!-- aqui vai a rota -->
      <RouterView></RouterView>
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
