<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="column in columns"
          :key="column.id"
        >
          {{ column.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in data"
        :key="row.id"
      >
        <td
          v-for="column in columns"
          :key="column.id"
        >
          <AppInsertH :render="column.render(row)" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts" generic="T extends { id: string | number }">
import { TableColumn } from '@/types'

import AppInsertH from './AppInsertH.vue'

defineProps<{
  columns: TableColumn<T>[]
  data: T[]
}>()
</script>
<style scoped>
table,
th,
td {
  border: 1px solid var(--secondary-color);
  border-collapse: collapse;
}

thead {
  background-color: var(--secondary-color);
  color: var(--contrast-color);
}

th,
td {
  padding: 0.8rem;
  text-align: center;
}
</style>
