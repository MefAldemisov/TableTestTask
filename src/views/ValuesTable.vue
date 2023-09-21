<template>
  <h1>Table</h1>
  <AppConfirm ref="confirmRef">Are you sure?</AppConfirm>
  <AppButton
    :btn-type="ButtonType.Success"
    @click="open"
  >
    Click me
  </AppButton>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import AppButton from '@/components/AppButton.vue'
import AppConfirm from '@/components/AppConfirm.vue'
import { ButtonType } from '@/types'

const confirmRef = ref<InstanceType<typeof AppConfirm> | undefined>()
const open = () => {
  confirmRef.value?.showModal()
}
</script>
