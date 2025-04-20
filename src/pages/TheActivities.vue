<script setup>
import { activities } from '@/activities';
import ActivityItem from '@/components/ActivityItem.vue';
import TheActivityForm from '@/components/TheActivityForm.vue';
import TheNoActivity from '@/components/TheNoActivity.vue';
</script>

<template>
  <div class="flex flex-col relative">
    <ul class="flex-1" v-show="activities.length">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
      />
    </ul>
    <TheNoActivity v-show="!activities.length" class="flex-1" />
    <TheActivityForm />
  </div>
</template>
