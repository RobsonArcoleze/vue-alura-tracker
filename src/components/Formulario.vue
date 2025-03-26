<script setup lang="ts"></script>

<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa!">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" />
      </div>
    </div>
  </div>
  <div class="column">
    <section>00:00:00</section>
    <button class="button">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<style scoped></style>
