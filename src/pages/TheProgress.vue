<script setup>
import { trackedActivities } from '@/activities';
import ProgressItem from '@/components/ProgressItem.vue';
import TheNoActivity from '@/components/TheNoActivity.vue';
</script>

<template>
  <div class="flex items-center justify-center">
    <ul v-show="trackedActivities.length" class="">
      <ProgressItem
        v-for="activity in trackedActivities"
        :key="activity.id"
        :activity="activity"
      />
    </ul>
    <TheNoActivity v-show="!trackedActivities.length" class="h-" />
  </div>
</template>
