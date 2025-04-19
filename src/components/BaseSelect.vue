<script setup>
import { computed } from 'vue';
import { ICON_XMARK } from '@/icons';
import { normalizeSelectValue } from '@/functions';
import {
  validateSelectOptions,
  isSelectValueValid,
  isUndefinedOrNull,
} from '../validators';
import BaseIcon from './BaseIcon.vue';
import BaseButton from './BaseButton.vue';

const props = defineProps({
  selected: [String, Number],
  options: {
    type: Array,
    required: true,
    validator: validateSelectOptions,
  },
  placeholder: {
    type: String,
    required: true,
  },
});

const emit = defineEmits({
  select: isSelectValueValid,
});

const isNotSelected = computed(() => isUndefinedOrNull(props.selected));

function select(value) {
  emit('select', normalizeSelectValue(value));
}
</script>

<template>
  <div class="flex items-center w-full justify-center gap-4">
    <BaseButton @click="select(null)">
      <BaseIcon :name="ICON_XMARK" class="size-8" />
    </BaseButton>

    <select
      name="select"
      id="select"
      class="bg-gray-700 w-full rounded-xl h-10 px-5"
      @change="select($event.target.value)"
    >
      <option value="" disabled :selected="isNotSelected">
        {{ placeholder }}
      </option>

      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="selected === value"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
