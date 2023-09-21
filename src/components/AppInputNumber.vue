<template>
  <div class="input-number">
    <label :for="id">{{ label }} </label>
    <input
      :id="id"
      type="number"
      :value="modelValue"
      @input="
        event =>
          $emit('update:modelValue', (<HTMLInputElement>event.target).value)
      "
    />
  </div>
</template>
<script setup lang="ts">
/**
 * If I would create a real InputNumber component on a bug project, I'd use
 * _.uniqueId() function to generate id's. But now, the Id is passed as a required prop
 */
defineProps<{
  id: string
  modelValue: number
  label: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()
</script>
<style scoped>
label {
  display: block;
  margin-bottom: 0.5rem;
}
input {
  display: block;
  padding: 0.8rem;
  border: 1px solid currentColor;
  border-radius: 0;
}
</style>
