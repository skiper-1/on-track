<script setup>
import { isTimelineItemValid } from '@/validators';
import { activitySelectOptions } from '@/activities';
import { updateTimelineItem } from '@/timileneItems';
import { now } from '@/time';
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
  <li
    :class="[
      'relative my-5 mx-2 p-5 rounded-2xl scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300',
      timelineItem.hour === now.getHours()
        ? 'bg-blue-500/50'
        : 'bg-violet-500/10',
    ]"
  >
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
