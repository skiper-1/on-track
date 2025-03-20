<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline';
import BaseButton from './BaseButton.vue';
import {
  validateSelectOptions,
  isUndefinedOrNull,
  isNumberOrNull,
} from '@/validators';
import { computed } from 'vue';

const props = defineProps({
  selected: {
    type: Number,
    required: false,
  },
  options: {
    type: Array,
    required: true,
    validator: validateSelectOptions,
  },

  placeholder: {
    type: String,
    required: false,
  },
});

const emits = defineEmits({
  select: isNumberOrNull,

  reset() {
    return true;
  },
});

const isNotSelected = computed(() => isUndefinedOrNull(props.selected));
</script>

<template>
  <div class="flex items-center justify-center p-7 gap-4">
    <select
      name="select"
      id="select"
      class="border-2 border-green-600/70 w-full rounded-xl h-10 px-2 hover:border-green-400 focus:outline-none focus:border-green-500"
      @change="$emit('select', +$event.target.value)"
    >
      <option value="0" disabled :selected="isNotSelected">Rest</option>
      <option
        v-for="{ value, label } in props.options"
        :value="value"
        :selected="props.selected === value"
      >
        {{ label }}
      </option>
    </select>
    <BaseButton @click="$emit('reset')">
      <XMarkIcon class="size-10 text-red-500 hover:text-red-300" />
    </BaseButton>
  </div>
</template>
