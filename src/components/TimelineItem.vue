<script setup>
import {
  isTimelineItemValid,
  isValidActivity,
  validateSelectOptions,
  validActivities,
} from '@/validators';
import BaseSelect from './BaseSelect.vue';
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
  activities: {
    type: Array,
    required: true,
    validator: validActivities,
  },
});

const emit = defineEmits({
  selectActivity: isValidActivity,
});

const selectActivity = (id) =>
  emit(
    'selectActivity',
    props.activities.find((activity) => activity.id === id)
  );
</script>

<template>
  <li
    class="relative border-2 border-violet-700 mx-3 my-6 rounded-2xl bg-gradient-to-bl from-gray-700/50 to-blue-900/50"
  >
    <BaseHour :hour="timelineItem.hour" />
    <BaseSelect
      :options="activitySelectOptions"
      placeholder="Rest"
      :selected="timelineItem.activityId"
      @select="selectActivity"
      @reset="selectActivity"
    />
  </li>
</template>
