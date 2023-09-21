<template>
  <dialog ref="dialogRef">
    <form method="dialog">
      <header>
        <p class="title"><slot name="title" /></p>
        <AppButton
          type="submit"
          aria-label="Закрыть"
          title="Закрыть"
        >
          <Close
            width="14"
            height="14"
          />
        </AppButton>
      </header>
      <main>
        <slot />
      </main>
    </form>
  </dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import Close from '@/assets/icons/close.svg'

import AppButton from './AppButton.vue'

const dialogRef = ref<HTMLDialogElement | null>(null)

defineExpose({
  showModal: () => dialogRef.value?.showModal(),
  close: () => dialogRef.value?.close(),
})
</script>
<style scoped>
dialog {
  padding: 1rem;
}

main {
  padding-top: 1rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

header button {
  padding: 2px;
  padding-bottom: 0;
}

p.title {
  opacity: 0.5;
}
</style>
