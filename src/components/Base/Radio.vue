<script lang="ts">
import { defineComponent } from 'vue'
import UniqueID from '~/composables/useUniqueID.js'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
  setup() {
    const uuid = UniqueID().getID()
    return { uuid }
  }
})
</script>

<template>
  <div class="flex items-center">
    <input
      :checked="modelValue === value"
      :value="value"
      v-bind="$attrs"
      :id="`radio-${uuid}`"
      @change="$emit('update:modelValue', value)"
      type="radio"
      class="w-4 h-4 border-gray-300 focus:ring-primary-500 text-primary-600"
    />
    <label
      v-if="label"
      :for="`radio-${uuid}`"
      class="block ml-3 text-sm font-medium text-gray-700"
    >{{ label }}</label>
  </div>
</template>
