<script setup>
import ActivityItem from '@/components/ActivityItem.vue';
import { isValidActivity, validActivities } from '@/validators';
import TheFormActivity from '@/components/TheFormActivity.vue';

import TheNoActivity from '@/components/TheNoActivity.vue';

const props = defineProps({
  activities: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits({
  removeActivity: isValidActivity,
  createActivity: isValidActivity,
});
</script>

<template>
  <div class="flex flex-col grow">
    <ul class="grow mt-5" v-if="activities.length">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        @removeActivity="emit('removeActivity', activity)"
      />
    </ul>
    <TheNoActivity class="grow" v-else />
    <TheFormActivity @submit="emit('createActivity', $event)" />
  </div>
</template>
