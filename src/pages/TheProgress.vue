<script setup>
import ProgressItem from '@/components/ProgressItem.vue';
import { trackedActivities } from '@/activities';
</script>

<template>
  <div class="">
    <ul class="flex flex-col gap-2">
      <ProgressItem
        v-for="activity in trackedActivities"
        :key="activity.id"
        :activity="activity"
      />
    </ul>
  </div>
</template>
