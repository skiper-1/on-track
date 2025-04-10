<script setup>
import { computed } from 'vue';
import { getActivityProgress } from '@/activities';
import { getColorClass, formatSeconds } from '@/functions';
import { getTotalActivitySeconds } from '@/timileneItems';

const props = defineProps({
  activity: {
    type: Object,
    required: true,
  },
});

const progress = computed(() => getActivityProgress(props.activity));
</script>

<template>
  <li class="m-4 rounded-xl bg-violet-500/10">
    <div>
      <div class="truncate text-xl px-10 my-3">
        {{ activity.name }}
      </div>
      <div class="mx-5 flex h-5 overflow-hidden rounded-xl">
        <div
          :class="getColorClass(progress)"
          :style="`width: ${progress}%`"
        ></div>
      </div>
      <div class="flex justify-between px-10 py-2">
        <span>{{ progress }} %</span>
        <span
          >{{ formatSeconds(getTotalActivitySeconds(activity)) }}
          /
          {{ formatSeconds(activity.secondsToComplete) }}</span
        >
      </div>
    </div>
  </li>
</template>
