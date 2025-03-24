<script setup>
import { inject } from 'vue';
import { TrashIcon } from '@heroicons/vue/24/outline';
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import { isValidActivity } from '@/validators';
import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue';

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isValidActivity,
  },
});

const periodSelectOptions = inject('periodSelectOptions');
const setActivitySecondsToComplete = inject('setActivitySecondsToComplete');
const deleteActivity = inject('deleteActivity');
</script>

<template>
  <li class="flex flex-col gap-1 mt-2">
    <div class="flex items-center m-5 gap-5">
      <BaseButton type="danger" @click="deleteActivity(activity)">
        <TrashIcon class="size-8 p-1" />
      </BaseButton>
      <span class="w-full text-2xl truncate">{{ activity.name }}</span>
    </div>
    <div class="flex items-center gap-5 px-5">
      <ActivitySecondsToComplete
        v-if="activity.secondsToComplete"
        :activity="activity"
      />
      <BaseSelect
        :selected="activity.secondsToComplete || null"
        :options="periodSelectOptions"
        placeholder="hh:mm"
        @select="setActivitySecondsToComplete(activity, $event || 0)"
        @reset="activity.secondsToComplete = null"
      />
    </div>
  </li>
</template>
