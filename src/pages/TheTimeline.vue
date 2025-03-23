<script setup>
import TimelineItem from '@/components/TimelineItem.vue';
import { validateSelectOptions, validateTimelineItems } from '@/validators';
const props = defineProps({
  timelineItems: {
    type: Array,
    require: true,
    validator: validateTimelineItems,
  },
  activitySelectOptions: {
    type: Array,
    required: true,
    validator: validateSelectOptions,
  },
});
</script>

<template>
  <div class="">
    <div>
      <ul>
        <TimelineItem
          v-for="timelineItem in props.timelineItems"
          :key="timelineItem"
          :timeline-item="timelineItem"
          :activity-select-options="activitySelectOptions"
        />
      </ul>
    </div>
  </div>
</template>
