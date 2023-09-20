<template>
  <h1>Table</h1>
  <AppButton :btn-type="ButtonType.Success">Click me</AppButton>
</template>
<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import { ButtonType } from '@/types'
</script>
