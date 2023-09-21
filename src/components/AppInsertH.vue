<template>
  <RenderValue />
</template>
<script setup lang="ts">
import { computed, VNode } from 'vue'

const props = defineProps<{
  render: VNode
}>()
const RenderValue = computed(() => props.render)
</script>
