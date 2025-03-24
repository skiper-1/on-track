<script setup>
import ActivityItem from '@/components/ActivityItem.vue';
import TheFormActivity from '@/components/TheFormActivity.vue';

import TheNoActivity from '@/components/TheNoActivity.vue';

const props = defineProps({
  activities: {
    type: Array,
    required: true,
  },
});
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
    <TheNoActivity class="grow" v-else />
    <TheFormActivity />
  </div>
</template>
