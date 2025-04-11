<script setup>
import ProgressItem from '@/components/ProgressItem.vue';
import { activities, trackedActivities } from '@/activities';
import TheNoActivity from '@/components/TheNoActivity.vue';
</script>

<template>
  <ul class="flex flex-col" v-if="activities.length">
    <ProgressItem
      v-for="activity in trackedActivities"
      :key="activity.id"
      :activity="activity"
    />
  </ul>
  <TheNoActivity v-else />
</template>
