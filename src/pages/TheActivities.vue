<script setup>
import ActivityItem from '@/components/ActivityItem.vue';
import TheFormActivity from '@/components/TheFormActivity.vue';
import { activities } from '@/activities';
import TheNoActivity from '@/components/TheNoActivity.vue';
</script>

<template>
  <div class="flex flex-col">
    <ul class="grow" v-if="activities.length">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
      />
    </ul>
    <TheNoActivity class="grow" v-else />
    <TheFormActivity />
  </div>
</template>
