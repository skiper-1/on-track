<script setup>
import TheNav from '@/components/TheNav.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheTimeline from './pages/TheTimeline.vue';
import TheActivities from './pages/TheActivities.vue';
import TheProgress from './pages/TheProgress.vue';
import { ref, computed } from 'vue';
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '@/constants';
import {
  normalizePageHash,
  generateTimelineItems,
  generateActivitySelectOptions,
  generateActivities,
} from './functions';

const currentPage = ref(normalizePageHash());
const activities = ref(generateActivities());
const timeline = ref();
const timelineItems = ref(generateTimelineItems(activities.value));

const activitySelectOptions = computed(() =>
  generateActivitySelectOptions(activities.value)
);

const goTo = (page) => {
  if (currentPage.value === PAGE_TIMELINE && page === PAGE_TIMELINE) {
    timeline.value.scrollToHour();
  }

  if (page !== PAGE_TIMELINE) {
    document.body.scrollIntoView();
  }

  currentPage.value = page;
};

const removeActivity = (activity) => {
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

const setTimelineItemActivity = (timelineItem, activity) =>
  (timelineItem.activityId = activity.id);

const setActivitySecondsToComplete = (activity, secondsToComplete) => {
  activity.secondsToComplete = secondsToComplete;
};
</script>

<template>
  <div class="flex flex-col bg-gray-800 min-h-screen">
    <TheHeader @navigate="goTo($event)" />
    <TheTimeline
      ref="timeline"
      class="flex-1"
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activities="activities"
      :activity-select-options="activitySelectOptions"
      :currentPage="currentPage"
      @set-timeline-item-activity="setTimelineItemActivity"
    />
    <TheActivities
      class="flex-1"
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @remove-activity="removeActivity"
      @create-activity="createActivity"
      @set-activity-seconds-to-complete="setActivitySecondsToComplete"
    />
    <TheProgress class="flex-1" v-show="currentPage === PAGE_PROGRESS" />
    <TheNav :current-page="currentPage" @navigate="goTo($event)" />
  </div>
</template>
