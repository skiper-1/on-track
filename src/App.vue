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
const timelineItems = generateTimelineItems();

const activities = ref(generateActivities());

const activitySelectOptions = computed(() =>
  generateActivitySelectOptions(activities.value)
);

const goTo = (page) => {
  currentPage.value = page;
};

const removeActivity = (activity) =>
  activities.value.splice(activities.value.indexOf(activity), 1);

const createActivity = (activity) => {
  activities.value.push(activity);
};

const setTimelineItemActivity = ({ timelineItem, activity }) =>
  (timelineItem.activityId = activity.id);
</script>

<template>
  <div class="flex flex-col bg-gray-800 min-h-screen">
    <TheHeader @navigate="goTo($event)" />
    <TheTimeline
      class="flex-1"
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activities="activities"
      :activity-select-options="activitySelectOptions"
      @set-timeline-item-activity="setTimelineItemActivity"
    />
    <TheActivities
      class="flex-1"
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @remove-activity="removeActivity"
      @create-activity="createActivity"
    />
    <TheProgress class="flex-1" v-show="currentPage === PAGE_PROGRESS" />
    <TheNav :current-page="currentPage" @navigate="goTo($event)" />
  </div>
</template>
