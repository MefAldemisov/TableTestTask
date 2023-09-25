import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

export interface Value {
  id: number
  value: number
}

export const useValues = defineStore('values', () => {
  const values = ref<Value[]>(JSON.parse(localStorage.getItem('array') ?? '[]'))

  watch(
    values,
    newValue => {
      localStorage.setItem('array', JSON.stringify(newValue))
    },
    { deep: true },
  )

  const currentIndex = computed(
    () => Math.max(0, ...values.value.map(value => value.id)) + 1,
  )

  const addNewValue = (value: number) => {
    values.value.unshift({
      id: currentIndex.value,
      value,
    })
  }

  const updateValue = (id: number, newValue: number) => {
    const index = values.value.findIndex(value => value.id === id)
    values.value[index].value = newValue
  }

  const deleteValue = (id: number) => {
    const removeIndex = values.value.findIndex(value => value.id === id)
    if (removeIndex !== -1) values.value.splice(removeIndex, 1)
    else throw Error('No value with such id')
  }

  const getValue = (id: number): number | undefined =>
    values.value.find(value => value.id === id)?.value

  return { values, addNewValue, updateValue, deleteValue, getValue }
})
