/* eslint-disable vue/require-default-prop */
import { defineComponent, PropType, VNode } from 'vue'

export default defineComponent({
  name: 'AppInsertH',
  props: {
    render: {
      type: Function as PropType<() => VNode>,
      required: false,
    },
  },
  setup(props) {
    return props.render
  },
})
