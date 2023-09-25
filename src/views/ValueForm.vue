<template>
  <form ref="valueForm">
    <h1>Форма {{ isCreateForm ? 'создания' : 'редактирования' }} значения</h1>
    <AppConfirm
      ref="confirmDeleteRef"
      confirm-text="Удалить"
      @confirm="deleteValue"
    >
      Вы уверены, что хотите удалить значение {{ value }}?
    </AppConfirm>
    <AppConfirm
      ref="confirmCancelRef"
      confirm-text="Очистить форму"
      @confirm="cancel"
    >
      Вы уверены, что хотите отменить изменения?
    </AppConfirm>

    <AppInputNumber
      id="value"
      v-model="value"
      :default-value="defaultValue"
      label="Укажите значение"
    />
    <div class="buttons-list">
      <AppButton
        :disabled="isCreateForm"
        :btn-type="ButtonType.Error"
        @click="confirmDeleteModalEvents.open"
      >
        Удалить
      </AppButton>

      <AppButton
        :btn-type="ButtonType.Default"
        @click="confirmCancelModalEvents.open"
      >
        Отменить
      </AppButton>

      <AppButton
        :btn-type="ButtonType.Success"
        type="submit"
        @click="saveValue"
      >
        Сохранить
      </AppButton>
    </div>
  </form>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import AppButton from '@/components/AppButton.vue'
import AppConfirm from '@/components/AppConfirm.vue'
import AppInputNumber from '@/components/AppInputNumber.vue'
import { useOpenModal } from '@/composables/useOpenModal'
import { useValues } from '@/store/values'
import { ButtonType } from '@/types'

const store = useValues()
const router = useRouter()
const route = useRoute()

// props
const confirmDeleteRef = ref<InstanceType<typeof AppConfirm> | undefined>()
const confirmDeleteModalEvents = useOpenModal(confirmDeleteRef)

const confirmCancelRef = ref<InstanceType<typeof AppConfirm> | undefined>()
const confirmCancelModalEvents = useOpenModal(confirmCancelRef)

// router-related variables
const id = computed(() => Number(route.params.id) || undefined)
const isCreateForm = computed(() => id.value === undefined)

// default case for create form
const value = ref(0)

// default value for reset
const defaultValue = ref(0)
onMounted(() => {
  if (!isCreateForm.value) {
    const valueFromStore = store.getValue(id.value as number)
    if (valueFromStore !== undefined) {
      defaultValue.value = valueFromStore
      value.value = valueFromStore
    } else {
      router.push('/value/create')
    }
  }
})

const saveValue = () => {
  if (isCreateForm.value) store.addNewValue(value.value)
  else store.updateValue(id.value as number, value.value)
  router.push('/')
}

const valueForm = ref<HTMLFormElement | undefined>()
const cancel = () => {
  valueForm.value?.reset()
}

const deleteValue = () => {
  if (isCreateForm.value) return
  store.deleteValue(id.value as number)
  router.push('/')
}
</script>
<style scoped>
form {
  padding: 1rem;
}
h1 {
  font-size: 2rem;
  margin: 1rem 0;
}
.buttons-list {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}
</style>
