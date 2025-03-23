<script setup>
import { isTimelineItemValid, validateSelectOptions } from '@/validators';
import BaseSelect from './BaseSelect.vue';
import { ref } from 'vue';
import BaseHour from './BaseHour.vue';
const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
});

const selectedActivityId = ref(0);
</script>

<template>
  <li
    class="relative border-2 border-violet-700 mx-3 my-6 rounded-2xl bg-gradient-to-bl from-gray-700/50 to-blue-900/50"
  >
    <BaseHour :hour="timelineItem.hour" />
    <BaseSelect
      :options="activitySelectOptions"
      placeholder="Rest"
      :selected="selectedActivityId"
      @select="selectedActivityId = $event"
      @reset="selectedActivityId = null"
    />
  </li>
</template>
