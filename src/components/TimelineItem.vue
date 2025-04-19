<script setup>
import { isTimelineItemValid } from '@/validators';
import { activitySelectOptions } from '@/activities';
import { updateTimelineItem } from '@/timileneItems';
import BaseHour from './BaseHour.vue';
import BaseSelect from './BaseSelect.vue';
import TimelineStopwatch from './TimelineStopwatch.vue';

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid,
  },
});
</script>

<template>
  <li class="relative bg-violet-500/10 my-5 mx-2 p-5 rounded-2xl">
    <BaseHour :hour="timelineItem.hour" />
    <BaseSelect
      :options="activitySelectOptions"
      placeholder="Rest"
      :selected="timelineItem.activityId"
      @select="
        updateTimelineItem(timelineItem, {
          activityId: $event,
        })
      "
    />
    <TimelineStopwatch :timelineItem="timelineItem" />
  </li>
</template>
