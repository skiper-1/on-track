<script setup>
import {
  isTimelineItemValid,
  isValidActivity,
  validateSelectOptions,
  validActivities,
  isHourValid,
} from '@/validators';
import BaseSelect from './BaseSelect.vue';

import BaseHour from './BaseHour.vue';
import { NULLABLE_ACTIVITY } from '@/constants';
import TimelineStopwatch from './TimelineStopwatch.vue';

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
  activities: {
    type: Array,
    required: true,
    validator: validActivities,
  },
});

const emit = defineEmits({
  selectActivity: isValidActivity,
  scrollToHour: isHourValid,
});

const selectActivity = (id) => emit('selectActivity', findActivityById(id));

const findActivityById = (id) =>
  props.activities.find((activity) => activity.id === id) || NULLABLE_ACTIVITY;
</script>

<template>
  <li
    class="relative border-2 border-violet-700 m-2 p-5 rounded-2xl bg-gradient-to-bl from-gray-700/50 to-blue-900/50"
  >
    <BaseHour
      :hour="timelineItem.hour"
      @click.prevent="emit('scrollToHour', timelineItem.hour)"
    />
    <BaseSelect
      :options="activitySelectOptions"
      placeholder="Rest"
      :selected="timelineItem.activityId"
      @select="selectActivity"
      @reset="selectActivity"
    />
    <TimelineStopwatch
      :seconds="timelineItem.activitySeconds"
      :hour="timelineItem.hour"
    />
  </li>
</template>
