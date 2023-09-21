import { VNode } from 'vue'

export enum ButtonType {
  Success = 'success',
  Error = 'error',
  Default = 'default',
}

export interface TableColumn<T> {
  id: string | number
  title: string
  render: (row: T) => VNode
}
