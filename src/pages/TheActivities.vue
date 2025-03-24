<script setup>
import ActivityItem from '@/components/ActivityItem.vue';
import { isNumber, isValidActivity, validateTimelineItems } from '@/validators';
import TheFormActivity from '@/components/TheFormActivity.vue';

import TheNoActivity from '@/components/TheNoActivity.vue';

const props = defineProps({
  activities: {
    type: Array,
    required: true,
  },
  timelineItems: {
    type: Array,
    require: true,
    validator: validateTimelineItems,
  },
});

const emit = defineEmits({
  setActivitySecondsToComplete(activity, secondsToComplete) {
    return [isValidActivity(activity), isNumber(secondsToComplete)].every(
      Boolean
    );
  },
  removeActivity: isValidActivity,
  createActivity: isValidActivity,
});

const setSecondsToComplete = (activity, secondsToCompleted) => {
  emit('setActivitySecondsToComplete', activity, secondsToCompleted);
};
</script>

<template>
  <div class="flex flex-col grow">
    <ul class="grow" v-if="activities.length">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        :timeline-items="timelineItems"
        @removeActivity="emit('removeActivity', activity)"
        @set-seconds-to-complete="setSecondsToComplete(activity, $event)"
      />
    </ul>
    <TheNoActivity class="grow" v-else />
    <TheFormActivity @submit="emit('createActivity', $event)" />
  </div>
</template>
