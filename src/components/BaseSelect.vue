<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline';
import BaseButton from './BaseButton.vue';
import { isUndefinedOrNull, isSelectValueValid } from '@/validators';
import { computed } from 'vue';
import { normalizeSelectValue } from '@/functions';

const props = defineProps({
  selected: {
    type: [String, Number, null],
    required: false,
  },
  options: {
    type: Array,
    required: true,
  },

  placeholder: {
    type: String,
    required: false,
  },
});

const emit = defineEmits({
  select: isSelectValueValid,

  reset() {
    return true;
  },
});

const isNotSelected = computed(() => isUndefinedOrNull(props.selected));

const select = (value) => emit('select', normalizeSelectValue(value));
</script>

<template>
  <div class="flex items-center w-full justify-center gap-4">
    <select
      name="select"
      id="select"
      class="border-2 border-green-600/70 w-full rounded-xl h-10 px-2 hover:border-green-400 focus:outline-none focus:border-green-500"
      @change="select($event.target.value)"
    >
      <option value="0" disabled :selected="isNotSelected">
        {{ placeholder }}
      </option>
      <option
        v-for="{ value, label } in props.options"
        :value="value"
        :selected="props.selected === value"
      >
        {{ label }}
      </option>
    </select>
    <BaseButton @click="$emit('reset')">
      <XMarkIcon class="size-8" />
    </BaseButton>
  </div>
</template>
