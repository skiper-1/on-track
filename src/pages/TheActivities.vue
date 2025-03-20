<script setup>
import ActivityItem from '@/components/ActivityItem.vue';
import { validActivities } from '@/validators';

const props = defineProps({
  activities: {
    type: Array,
    required: true,
    validator: validActivities,
  },
});
</script>

<template>
  <div>
    <ul>
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
      />
    </ul>
  </div>
</template>
