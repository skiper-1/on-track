<script setup>
import { onActivated } from 'vue';
import {
  timelineItems,
  timelineItemsRefs,
  scrollToCurrentHour,
} from '@/timileneItems.js';
import TimelineItem from '@/components/TimelineItem.vue';

onActivated(scrollToCurrentHour);
</script>

<template>
  <div class="relative mt-7 scrollbar-hidden">
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
