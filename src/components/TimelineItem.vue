<script setup>
import { isTimelineItemValid, isUndefined } from '@/validators';
import BaseSelect from './BaseSelect.vue';
import BaseHour from './BaseHour.vue';
import TimelineStopwatch from './TimelineStopwatch.vue';
import { activitySelectOptions } from '@/activities';
import { updateTimelineItem } from '@/timileneItems';

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid,
  },
});

const emit = defineEmits({
  scrollToHour: isUndefined,
});
</script>

<template>
  <li
    class="relative border-2 border-violet-700 my-5 mx-2 p-5 rounded-2xl bg-gradient-to-bl from-gray-700/50 to-blue-900/50"
  >
    <BaseHour :hour="timelineItem.hour" @click.prevent="emit('scrollToHour')" />
    <BaseSelect
      :options="activitySelectOptions"
      placeholder="Rest"
      :selected="timelineItem.activityId"
      @select="updateTimelineItem(timelineItem, { activityId: $event })"
      @reset="selectActivity"
    />
    <TimelineStopwatch :timelineItem="timelineItem" />
  </li>
</template>
