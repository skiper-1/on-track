<script setup>
import TimelineItem from '@/components/TimelineItem.vue';
import { onActivated } from 'vue';
import {
  timelineItems,
  timelineItemsRefs,
  scrollToCurrentHour,
} from '@/timileneItems.js';

onActivated(() => scrollToCurrentHour(false));
</script>

<template>
  <div>
    <div>
      <ul>
        <TimelineItem
          v-for="timelineItem in timelineItems"
          ref="timelineItemsRefs"
          :key="timelineItem"
          :timeline-item="timelineItem"
        />
      </ul>
    </div>
  </div>
</template>
