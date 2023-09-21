<template>
  <h1>Form</h1>
  <form>
    <AppInputNumber
      id="value"
      v-model="value"
      label="Укажите значение"
    />
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import AppInputNumber from '@/components/AppInputNumber.vue'

const value = ref(0)
</script>
