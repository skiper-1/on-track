<script setup>
import { formatSeconds, getTotalActivitySeconds } from '@/functions';
import { isValidActivity } from '@/validators';
import { validateTimelineItems } from '@/validators';
import { computed } from 'vue';

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isValidActivity,
  },
  timelineItems: {
    type: Array,
    require: true,
    validator: validateTimelineItems,
  },
});

const seconds = computed(
  () => `${sign.value}${formatSeconds(secondsDiff.value)}`
);

const sign = computed(() => (secondsDiff.value >= 0 ? '+' : '-'));

const secondsDiff = computed(
  () =>
    getTotalActivitySeconds(props.activity, props.timelineItems) -
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
