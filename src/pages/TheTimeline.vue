<script setup>
import TimelineItem from '@/components/TimelineItem.vue';
import { PAGE_TIMELINE } from '@/constants';
import { validateTimelineItems, isPageValid } from '@/validators';
import { ref, watchPostEffect, nextTick } from 'vue';

const props = defineProps({
  timelineItems: {
    type: Array,
    require: true,
    validator: validateTimelineItems,
  },
  currentPage: {
    type: String,
    required: true,
    validator: isPageValid,
  },
});

const timelineItemsRefs = ref([]);

watchPostEffect(async () => {
  if (props.currentPage === PAGE_TIMELINE) {
    await nextTick();
    scrollToHour(null, false);
  }
});

const scrollToHour = (hour = null, isSmooth = true) => {
  hour ??= new Date().getHours();
  if (hour === 0) {
    document.body.scrollIntoView();
  } else {
    timelineItemsRefs.value[hour - 1].$el.scrollIntoView({
      behavior: isSmooth ? 'smooth' : 'instant',
    });
  }
};

defineExpose({ scrollToHour });
</script>

<template>
  <div class="">
    <div>
      <ul>
        <TimelineItem
          v-for="timelineItem in props.timelineItems"
          ref="timelineItemsRefs"
          :key="timelineItem"
          :timeline-item="timelineItem"
          @scroll-to-hour="scrollToHour"
        />
      </ul>
    </div>
  </div>
</template>
