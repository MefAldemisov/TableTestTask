<template>
  <div>
    <h1>Table</h1>
    <router-link to="/value/create">
      <AppButton
        :btn-type="ButtonType.Success"
        type="button"
      >
        Создать
      </AppButton>
    </router-link>
    <AppTable
      :columns="columns"
      :data="data"
    />
  </div>
</template>
<script setup lang="ts">
import { h } from 'vue'
import { RouterLink } from 'vue-router'

import AppButton from '@/components/AppButton.vue'
import AppTable from '@/components/AppTable.vue'
import { useValues } from '@/store/values'
import { ButtonType, TableColumn } from '@/types'

interface ValueType {
  id: number
  value: number
}

const store = useValues()
const data: ValueType[] = store.values

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
    render: row =>
      h(
        RouterLink,
        { to: `value/${row.id}` },
        h(AppButton, { btnType: ButtonType.Success }, 'Редактировать'),
      ),
  },
  {
    id: 3,
    title: '',
    render: () => h(AppButton, { btnType: ButtonType.Error }, 'Удалить'),
  },
]
</script>
