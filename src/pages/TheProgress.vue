<script setup>
import { trackedActivities } from '@/activities';
import ProgressItem from '@/components/ProgressItem.vue';
import TheNoActivity from '@/components/TheNoActivity.vue';
</script>

<template>
  <ul v-if="trackedActivities.length">
    <ProgressItem
      v-for="activity in trackedActivities"
      :key="activity.id"
      :activity="activity"
    />
  </ul>
  <TheNoActivity v-else />
</template>
