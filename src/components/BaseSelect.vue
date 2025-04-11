<script setup>
import BaseIcon from './BaseIcon.vue';
import BaseButton from './BaseButton.vue';
import { isSelectValueValid } from '@/validators';
import { ICON_XMARK } from '@/icons';
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
});

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
      <option value="0" disabled :selected="props.selected">
        {{ placeholder }}
      </option>

      <option
        v-for="{ value, label } in props.options"
        :key="value"
        :value="value"
        :selected="props.selected === value"
      >
        {{ label }}
      </option>
    </select>

    <BaseButton @click="$emit('reset')">
      <BaseIcon :name="ICON_XMARK" class="size-8" />
    </BaseButton>
  </div>
</template>
