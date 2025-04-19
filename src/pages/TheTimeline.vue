<script setup>
import { onActivated } from 'vue';
import {
  timelineItems,
  timelineItemsRefs,
  scrollToCurrentHour,
} from '@/timileneItems.js';
import TimelineItem from '@/components/TimelineItem.vue';
import TheTimelineIndicator from '@/components/TheTimelineIndicator.vue';

onActivated(scrollToCurrentHour);
</script>

<template>
  <div class="relative mt-7 scrollbar-none">
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
