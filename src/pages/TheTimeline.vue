<script setup>
import TimelineItem from '@/components/TimelineItem.vue';
import { PAGE_TIMELINE, MIDNIGHT_HOUR } from '@/constants';
import { ref, watchPostEffect, nextTick } from 'vue';
import { currentPage } from '@/router';
import { currentHour } from '@/functions';
import { timelineItems } from '@/timileneItems';

const timelineItemsRefs = ref([]);

watchPostEffect(async () => {
  if (currentPage.value === PAGE_TIMELINE) {
    await nextTick();
    scrollToHour(null, false);
  }
});

const scrollToHour = (hour = null, isSmooth = true) => {
  hour ??= currentHour();

  const el =
    hour === MIDNIGHT_HOUR
      ? document.body
      : timelineItemsRefs.value[hour - 1].$el;

  el.scrollIntoView({ behavior: isSmooth ? 'smooth' : 'instant' });
};

defineExpose({ scrollToHour });
</script>

<template>
  <div class="">
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
