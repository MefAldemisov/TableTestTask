<template>
  <h1>Form</h1>
  <form>
    <AppInputNumber
      id="value"
      v-model="value"
      label="Укажите значение"
    />
    <AppConfirm ref="confirmRef">Are you sure?</AppConfirm>
    <AppButton
      :btn-type="ButtonType.Success"
      @click="open"
    >
      Click me
    </AppButton>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import AppButton from '@/components/AppButton.vue'
import AppConfirm from '@/components/AppConfirm.vue'
import AppInputNumber from '@/components/AppInputNumber.vue'
import { ButtonType } from '@/types'

const confirmRef = ref<InstanceType<typeof AppConfirm> | undefined>()
const open = () => {
  confirmRef.value?.showModal()
}

const value = ref(0)
</script>
