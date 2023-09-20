import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Value {
  id: number
  value: number
}

export const useValues = defineStore('values', () => {
  const values = ref<Value[]>([])
  return { values }
})
