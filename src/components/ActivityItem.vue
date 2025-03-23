<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline';
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import { PERIOD_SELECT_OPTIONS } from '@/constants';
import { isNumber, isUndefined, isValidActivity } from '@/validators';

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isValidActivity,
  },
});

const emit = defineEmits({
  removeActivity: isUndefined,
  setSecondsToComplete: isNumber,
});
</script>

<template>
  <li class="flex flex-col gap-1">
    <div class="flex items-center mx-7 gap-5">
      <BaseButton type="danger" @click="emit('removeActivity')">
        <TrashIcon class="size-8 p-1" />
      </BaseButton>
      <span class="w-full text-2xl truncate">{{ activity.name }}</span>
    </div>
    <div>
      <BaseSelect
        :selected="activity.secondsToComplete || null"
        :options="PERIOD_SELECT_OPTIONS"
        placeholder="hh:mm"
        @select="emit('setSecondsToComplete', $event)"
        @reset="activity.secondsToComplete = null"
      />
    </div>
  </li>
</template>
