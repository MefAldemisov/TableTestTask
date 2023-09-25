import { Ref } from 'vue'

import AppConfirm from '@/components/AppConfirm.vue'
import AppPopup from '@/components/AppPopup.vue'

export const useOpenModal = (
  popupRef: Ref<InstanceType<typeof AppConfirm | typeof AppPopup> | undefined>,
) => {
  const open = () => {
    popupRef.value?.showModal()
  }
  return { open }
}
