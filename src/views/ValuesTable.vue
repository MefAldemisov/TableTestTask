<template>
  <h1>Table</h1>
  <AppTable
    :columns="columns"
    :data="data"
  />
</template>
<script setup lang="ts">
import { h } from 'vue'

import AppButton from '@/components/AppButton.vue'
import AppTable from '@/components/AppTable.vue'
import { ButtonType, TableColumn } from '@/types'

interface ValueType {
  id: number
  value: number
}

const data: ValueType[] = [
  { id: 0, value: 5 },
  { id: 1, value: 16 },
]

const columns: TableColumn<ValueType>[] = [
  {
    id: 0,
    title: 'Индекс',
    render: (row: ValueType) => h('div', {}, row.id),
  },
  {
    id: 1,
    title: 'Значение',
    render: (row: ValueType) => h('div', {}, row.value),
  },
  {
    id: 2,
    title: '',
    render: () =>
      h(AppButton, { btnType: ButtonType.Success }, 'Редактировать'),
  },
  {
    id: 3,
    title: '',
    render: () => h(AppButton, { btnType: ButtonType.Error }, 'Удалить'),
  },
]
</script>
