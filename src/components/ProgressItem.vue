<script setup>
import { formatSeconds } from '@/functions';
import { useProgress } from '@/composables/progress';

const props = defineProps({
  activity: {
    type: Object,
    required: true,
  },
});

const { colorClass, percentage, trackedSeconds } = useProgress(props.activity);
</script>

<template>
  <li class="m-4 rounded-xl bg-violet-500/10">
    <div>
      <div class="truncate text-xl px-10 my-3">
        {{ activity.name }}
      </div>
      <div class="mx-5 flex h-5 overflow-hidden rounded-xl">
        <div :class="colorClass" :style="`width: ${percentage}%`"></div>
      </div>
      <div class="flex justify-between px-10 py-2">
        <span>{{ percentage }} %</span>
        <span
          >{{ formatSeconds(trackedSeconds) }}
          /
          {{ formatSeconds(activity.secondsToComplete) }}</span
        >
      </div>
    </div>
  </li>
</template>
