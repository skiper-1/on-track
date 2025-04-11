<script setup>
import { computed } from 'vue';
import { calculateActivityCompletionPercentage } from '@/activities';
import { getColorClass, formatSeconds } from '@/functions';
import {
  calculateTrackedActivitySeconds,
  timelineItems,
} from '@/timileneItems';

const props = defineProps({
  activity: {
    type: Object,
    required: true,
  },
});

const percentage = computed(() =>
  calculateActivityCompletionPercentage(
    props.activity,
    trackedActivitySeconds.value
  )
);

const trackedActivitySeconds = computed(() =>
  calculateTrackedActivitySeconds(timelineItems.value, props.activity)
);
</script>

<template>
  <li class="m-4 rounded-xl bg-violet-500/10">
    <div>
      <div class="truncate text-xl px-10 my-3">
        {{ activity.name }}
      </div>
      <div class="mx-5 flex h-5 overflow-hidden rounded-xl">
        <div
          :class="getColorClass(percentage)"
          :style="`width: ${percentage}%`"
        ></div>
      </div>
      <div class="flex justify-between px-10 py-2">
        <span>{{ percentage }} %</span>
        <span
          >{{ formatSeconds(trackedActivitySeconds) }}
          /
          {{ formatSeconds(activity.secondsToComplete) }}</span
        >
      </div>
    </div>
  </li>
</template>
