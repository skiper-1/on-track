<script setup>
import TimelineItem from '@/components/TimelineItem.vue';
import { PAGE_TIMELINE } from '@/constants';
import {
  validateSelectOptions,
  validateTimelineItems,
  validActivities,
  isTimelineItemValid,
  isValidActivity,
  isPageValid,
  isNumber,
} from '@/validators';
import { ref, watchPostEffect, nextTick } from 'vue';

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
  currentPage: {
    type: String,
    required: true,
    validator: isPageValid,
  },
});

const emit = defineEmits({
  setTimelineItemActivity(timelineItem, activity) {
    return [isTimelineItemValid(timelineItem), isValidActivity(activity)].every(
      Boolean
    );
  },
  updateTimelineItemActivitySeconds(timelineItem, activitySeconds) {
    return [isTimelineItemValid(timelineItem), isNumber(activitySeconds)].every(
      Boolean
    );
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
          :activities="activities"
          :activity-select-options="activitySelectOptions"
          @scroll-to-hour="scrollToHour"
          @update-activity-seconds="
            emit('updateTimelineItemActivitySeconds', timelineItem, $event)
          "
          @select-activity="
            emit('setTimelineItemActivity', timelineItem, $event)
          "
        />
      </ul>
    </div>
  </div>
</template>
