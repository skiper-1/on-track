<script setup>
import { computed } from 'vue';
import { formatSecondsWithSign } from '@/functions';
import { isActivityValid } from '@/validators';
import {
  calculateTrackedActivitySeconds,
  timelineItems,
} from '@/timileneItems';

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid,
  },
});

const classes = computed(() => [
  'flex items-center rounded-xl px-2 text-xl h-10 bg-gray-700',
  remainingSeconds.value < 0 ? 'text-orange-300' : 'text-green-500',
]);

const remainingSeconds = computed(
  () =>
    calculateTrackedActivitySeconds(timelineItems.value, props.activity) -
    props.activity.secondsToComplete
);
</script>

<template>
  <div :class="classes">
    {{ formatSecondsWithSign(remainingSeconds) }}
  </div>
</template>
