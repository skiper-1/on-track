<script setup>
import { formatSeconds } from '@/functions';
import { useProgress } from '@/composables/progress';
import { HUNDRED_PERCENT } from '@/constants';
import { isActivityValid } from '@/validators';

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid,
  },
});

const { colorClass, percentage, trackedActivitySeconds } = useProgress(
  props.activity
);
</script>

<template>
  <li class="m-4 rounded-xl bg-violet-500/10">
    <div class="truncate text-xl px-10 my-3">
      {{ activity.name }}
    </div>
    <div class="mx-5 flex h-5 overflow-hidden rounded-xl">
      <div
        :class="['transition-all', colorClass]"
        :style="{ width: `${Math.min(percentage, HUNDRED_PERCENT)}%` }"
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
  </li>
</template>
