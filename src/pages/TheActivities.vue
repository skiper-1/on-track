<script setup>
import ActivityItem from '@/components/ActivityItem.vue';
import { isNumber, isValidActivity, validActivities } from '@/validators';
import TheFormActivity from '@/components/TheFormActivity.vue';

import TheNoActivity from '@/components/TheNoActivity.vue';

const props = defineProps({
  activities: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits({
  setActivitySecondsTocomplete(activity, secondsTocomplete) {
    return [isValidActivity(activity), isNumber(secondsTocomplete)].every(
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
    <ul class="grow mt-5" v-if="activities.length">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        @removeActivity="emit('removeActivity', activity)"
        @set-seconds-to-complete="setSecondsToComplete(activity, $event)"
      />
    </ul>
    <TheNoActivity class="grow" v-else />
    <TheFormActivity @submit="emit('createActivity', $event)" />
  </div>
</template>
