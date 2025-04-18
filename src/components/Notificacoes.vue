<script setup lang="ts">
import { TipoNotificacaoEnum } from '@/interface/INotificacao'
import { useProjetoStore } from '@/store'
import { computed, watch } from 'vue'

const store = useProjetoStore()
const notificacoes = computed(() => store.notificacoes)

const context = {
  [TipoNotificacaoEnum.SUCCESS]: 'is-success',
  [TipoNotificacaoEnum.WARNING]: 'is-warning',
  [TipoNotificacaoEnum.DANGER]: 'is-danger',
}

function removerNotificacao(id: number) {
  store.removerNotificaca(id)
}

watch(
  () => store.notificacoes,
  (newList) => {
    newList.forEach((notificacao) => {
      console.log(notificacao)

      setTimeout(() => {
        store.removerNotificaca(notificacao.id)
      }, notificacao.time ?? 3000)
    })
  },
  { deep: true },
)
</script>

<template>
  <transition-group name="fade" tag="div">
    <article
      class="message"
      v-for="notificao in notificacoes"
      :key="notificao.id"
      :class="context[notificao.tipo]"
    >
      <div class="message-header">
        <p>{{ notificao.titulo }}</p>
        <button
          class="delete"
          aria-label="delete"
          @click="removerNotificacao(notificao.id)"
        ></button>
      </div>
      <div class="message-body">{{ notificao.texto }}</div>
    </article>
  </transition-group>
</template>

<style scoped>
.message {
  position: absolute;
  z-index: 1;
  width: 40vw;
  padding: 2rem;
  right: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
