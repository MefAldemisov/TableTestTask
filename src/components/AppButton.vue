<template>
  <button
    formmethod="dialog"
    type="button"
    :class="btnType"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
import { ButtonType } from '@/types'

withDefaults(
  defineProps<{
    btnType?: ButtonType
  }>(),
  {
    btnType: ButtonType.Default,
  },
)
</script>
<style scoped>
button.default {
  --btn-color: var(--font-color);
}
button.success {
  --btn-color: var(--green-color);
}
button.error {
  --btn-color: var(--secondary-color);
}
button {
  cursor: pointer;
  border: 1px solid currentColor;
  transition:
    border-color 0.3s ease-out,
    color 0.3s ease-out,
    background-color 0.3s ease-out;
  -webkit-transition:
    0.3s ease-out,
    color 0.3s ease-out,
    background-color 0.3s ease-out;
  padding: 0.8rem;

  color: var(--btn-color, var(--font-color));
  background-color: var(--contrast-color);
}

button:hover {
  color: var(--contrast-color);
  background-color: var(--btn-color, var(--font-color));
}
</style>
