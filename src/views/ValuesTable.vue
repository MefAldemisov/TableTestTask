<template>
  <AppConfirm
    ref="confirmDeleteRef"
    confirm-text="Удалить"
    @confirm="deleteValue"
  >
    Вы уверены, что хотите удалить значение {{ store.getValue(deleteItemId) }}?
  </AppConfirm>
  <h1>Таблица значений</h1>
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
</template>
<script setup lang="ts">
import { h, ref } from 'vue'
import { RouterLink } from 'vue-router'

import AppButton from '@/components/AppButton.vue'
import AppConfirm from '@/components/AppConfirm.vue'
import AppTable from '@/components/AppTable.vue'
import { useOpenModal } from '@/composables/useOpenModal'
import { useValues, Value } from '@/store/values'
import { ButtonType, TableColumn } from '@/types'

const confirmDeleteRef = ref<InstanceType<typeof AppConfirm> | undefined>()
const confirmDeleteModalEvents = useOpenModal(confirmDeleteRef)

const store = useValues()
const data: Value[] = store.values

const deleteItemId = ref<number>(-1)

const columns: TableColumn<Value>[] = [
  {
    id: 0,
    title: 'Индекс',
    render: (row: Value) => h('div', {}, row.id),
  },
  {
    id: 1,
    title: 'Значение',
    render: (row: Value) => h('div', {}, row.value),
  },
  {
    id: 2,
    title: '',
    render: row =>
      h(RouterLink, { to: `value/${row.id}` }, () =>
        h(AppButton, { btnType: ButtonType.Success }, () => 'Редактировать'),
      ),
  },
  {
    id: 3,
    title: '',
    render: row =>
      h(
        AppButton,
        {
          btnType: ButtonType.Error,
          onClick: () => {
            deleteItemId.value = row.id
            confirmDeleteModalEvents.open()
          },
        },
        () => 'Удалить',
      ),
  },
]

const deleteValue = () => store.deleteValue(deleteItemId.value)
</script>
<style scoped lang="css">
table {
  margin-top: 1rem;
}
</style>
