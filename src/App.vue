<script setup>
import TheNav from '@/components/TheNav.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheTimeline from './pages/TheTimeline.vue';
import TheActivities from './pages/TheActivities.vue';
import TheProgress from './pages/TheProgress.vue';
import { ref, computed, provide, readonly } from 'vue';
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '@/constants';
import {
  generateTimelineItems,
  generateActivitySelectOptions,
  generateActivities,
  generatePeriodSelectOptions,
} from './functions';
import { currentPage, timelineRef } from './router';
import * as keys from '@/keys';

const activities = ref(generateActivities());

const timelineItems = ref(generateTimelineItems(activities.value));

const activitySelectOptions = computed(() =>
  generateActivitySelectOptions(activities.value)
);

const deleteActivity = (activity) => {
  timelineItems.value = timelineItems.value.map((timelineItem) => {
    if (timelineItem.activityId === activity.id) {
      return { ...timelineItem, activityId: null, activitySeconds: 0 };
    }
    return timelineItem;
  });

  activities.value = activities.value.filter((item) => item.id !== activity.id);
};

const createActivity = (activity) => {
  activities.value.push(activity);
};

const setTimelineItemActivity = (timelineItem, activityId) =>
  (timelineItem.activityId = activityId);

const setActivitySecondsToComplete = (activity, secondsToComplete) => {
  activity.secondsToComplete = secondsToComplete || 0;
};

const updateTimelineItemActivitySeconds = (timelineItem, secondsToComplete) => {
  timelineItem.activitySeconds += secondsToComplete;
};

provide(
  keys.updateTimelineItemActivitySecondsKey,
  updateTimelineItemActivitySeconds
);
provide(keys.timelineItemsKey, readonly(timelineItems.value));
provide(keys.activitySelectOptionsKey, readonly(activitySelectOptions.value));
provide(keys.periodSelectOptionsKey, readonly(generatePeriodSelectOptions()));
provide(keys.setTimelineItemActivityKey, setTimelineItemActivity);
provide(keys.setActivitySecondsToCompleteKey, setActivitySecondsToComplete);
provide(keys.createActivityKey, createActivity);
provide(keys.deleteActivityKey, deleteActivity);
</script>

<template>
  <div class="flex flex-col bg-gray-800 min-h-screen">
    <TheHeader />
    <TheTimeline
      ref="timelineRef"
      class="flex-1"
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
    />
    <TheActivities
      class="flex-1"
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
    />
    <TheProgress class="flex-1" v-show="currentPage === PAGE_PROGRESS" />
    <TheNav />
  </div>
</template>
