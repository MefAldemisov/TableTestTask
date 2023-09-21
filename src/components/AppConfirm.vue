<template>
  <AppPopup ref="dialogRef">
    <template #title> Предупреждение </template>
    <slot />
    <footer>
      <AppButton
        :btn-type="ButtonType.Error"
        type="submit"
      >
        {{ cancelText }}
      </AppButton>
      <AppButton
        :btn-type="ButtonType.Success"
        @click="confirm"
      >
        {{ confirmText }}
      </AppButton>
    </footer>
  </AppPopup>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import { ButtonType } from '@/types'

import AppButton from './AppButton.vue'
import AppPopup from './AppPopup.vue'

withDefaults(
  defineProps<{
    cancelText?: string
    confirmText?: string
  }>(),
  {
    cancelText: 'Отменить',
    confirmText: 'Подтвердить',
  },
)

const emit = defineEmits<{
  (e: 'confirm'): void
}>()

const dialogRef = ref<HTMLDialogElement | undefined>()

const confirm = () => {
  dialogRef.value?.close()
  emit('confirm')
}

defineExpose({
  showModal: () => dialogRef.value?.showModal(),
})
</script>
<style scoped>
dialog {
  min-width: 400px;
}
footer {
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
}
</style>
