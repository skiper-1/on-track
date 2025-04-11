<script setup>
import { formatSeconds } from '@/functions';
import {
  calculateTrackedActivitySeconds,
  timelineItems,
} from '@/timileneItems';
import { isValidActivity } from '@/validators';
import { computed } from 'vue';

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isValidActivity,
  },
});

const seconds = computed(
  () => `${sign.value}${formatSeconds(secondsDiff.value)}`
);

const sign = computed(() => (secondsDiff.value >= 0 ? '+' : '-'));

const secondsDiff = computed(
  () =>
    calculateTrackedActivitySeconds(timelineItems.value, props.activity) -
    props.activity.secondsToComplete
);
</script>

<template>
  <div
    :class="`rounded-xl p-2 ${
      secondsDiff > 0
        ? 'bg-green-300/75 text-green-700'
        : 'bg-red-300 text-red-700'
    }`"
  >
    {{ seconds }}
  </div>
</template>
