<script setup>
import TimelineItem from '@/components/TimelineItem.vue';
import { validateTimelineItems } from '@/validators';
const props = defineProps({
  timelineItems: {
    type: Array,
    require: true,
    validator: validateTimelineItems,
  },
});
</script>

<template>
  <div class="overflow-hidden">
    <div>
      <ul>
        <TimelineItem
          v-for="timelineItem in props.timelineItems"
          :key="timelineItem"
          :timeline-item="timelineItem"
        />
      </ul>
    </div>
  </div>
</template>
