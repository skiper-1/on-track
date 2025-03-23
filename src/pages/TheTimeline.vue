<script setup>
import TimelineItem from '@/components/TimelineItem.vue';
import {
  validateSelectOptions,
  validateTimelineItems,
  validActivities,
  isTimelineItemValid,
  isValidActivity,
} from '@/validators';

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
  activities: {
    type: Array,
    required: true,
    validator: validActivities,
  },
});

const emit = defineEmits({
  setTimelineItemActivity(timelineItem, activity) {
    return [isTimelineItemValid(timelineItem), isValidActivity(activity)].every(
      Boolean
    );
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
          :activities="activities"
          :activity-select-options="activitySelectOptions"
          @select-activity="
            emit('setTimelineItemActivity', timelineItem, $event)
          "
        />
      </ul>
    </div>
  </div>
</template>
