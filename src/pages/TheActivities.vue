<script setup>
import { activities } from '@/activities';
import ActivityItem from '@/components/ActivityItem.vue';
import TheActivityForm from '@/components/TheActivityForm.vue';
import TheNoActivity from '@/components/TheNoActivity.vue';
</script>

<template>
  <div class="flex flex-col grow">
    <ul class="grow" v-if="activities.length">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
      />
    </ul>
    <TheNoActivity v-else />
    <TheActivityForm />
  </div>
</template>
