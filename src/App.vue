<script setup>
import TheNav from '@/components/TheNav.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheTimeline from './pages/TheTimeline.vue';
import TheActivities from './pages/TheActivities.vue';
import TheProgress from './pages/TheProgress.vue';
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '@/constants';
import { currentPage, timelineRef } from './router';
</script>

<template>
  <div class="flex flex-col bg-gray-800 min-h-screen">
    <TheHeader />
    <TheTimeline
      ref="timelineRef"
      class="flex-1"
      v-show="currentPage === PAGE_TIMELINE"
    />
    <TheActivities class="flex-1" v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress class="flex-1" v-show="currentPage === PAGE_PROGRESS" />
    <TheNav />
  </div>
</template>
