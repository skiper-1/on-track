<script setup>
import TheNav from '@/components/TheNav.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheTimeline from './pages/TheTimeline.vue';
import TheActivities from './pages/TheActivities.vue';
import TheProgress from './pages/TheProgress.vue';
import { ref } from 'vue';
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants';
import { normalizePageHash, generateTimelineItems } from '../functions';

const currentPage = ref(normalizePageHash());
const timelineItems = generateTimelineItems();

const goTo = (page) => {
  currentPage.value = page;
};
</script>

<template>
  <div class="border-2 rounded-3xl flex flex-col h-screen">
    <TheHeader @navigate="goTo($event)" />
    <div
      class="flex-1 overflow-y-auto"
      style="scrollbar-width: none; -ms-overflow-style: none"
    >
      <TheTimeline
        class=""
        v-show="currentPage === PAGE_TIMELINE"
        :timeline-items="timelineItems"
      />
      <TheActivities class="" v-show="currentPage === PAGE_ACTIVITIES" />
      <TheProgress class="" v-show="currentPage === PAGE_PROGRESS" />
    </div>
    <TheNav :current-page="currentPage" @navigate="goTo($event)" />
  </div>
</template>
