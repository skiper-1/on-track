<script setup>
import TimelineItem from '@/components/TimelineItem.vue';
import { PAGE_TIMELINE } from '@/constants';
import { watchPostEffect, nextTick } from 'vue';
import { currentPage } from '@/router';
import {
  timelineItems,
  timelineItemsRefs,
  scrollToHour,
  scrollToCurrentHour,
} from '@/timileneItems.js';

watchPostEffect(async () => {
  if (currentPage.value === PAGE_TIMELINE) {
    await nextTick();
    scrollToCurrentHour(false);
  }
});
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
          @scroll-to-hour="scrollToHour(timelineItem.hour)"
        />
      </ul>
    </div>
  </div>
</template>
