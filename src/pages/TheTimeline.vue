<script setup>
import TimelineItem from '@/components/TimelineItem.vue';
import { onActivated, onDeactivated } from 'vue';
import {
  timelineItems,
  timelineItemsRefs,
  scrollToCurrentHour,
} from '@/timileneItems.js';
import TheTimelineIndicator from '@/components/TheTimelineIndicator.vue';
import { startTimer, stopTimer } from '@/time';

onActivated(() => {
  scrollToCurrentHour();
  startTimer();
});

onDeactivated(stopTimer);
</script>

<template>
  <div class="relative">
    <TheTimelineIndicator />
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        ref="timelineItemsRefs"
        :key="timelineItem"
        :timeline-item="timelineItem"
      />
    </ul>
  </div>
</template>
