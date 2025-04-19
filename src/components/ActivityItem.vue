<script setup>
import { PERIOD_SELECT_OPTIONS } from '@/constants';
import { ICON_TRASH } from '@/icons';
import { isActivityValid } from '@/validators';
import { updateActivity, deleteActivity } from '@/activities';
import { resetTimelineItemActivities, timelineItems } from '@/timileneItems';
import BaseIcon from '@/components/BaseIcon.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import RemainingActivitySeconds from './RemainingActivitySeconds.vue';

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid,
  },
});

const deleteAndResetActivity = (activity) => {
  resetTimelineItemActivities(timelineItems.value, activity);
  deleteActivity(activity);
};
</script>

<template>
  <li class="flex flex-col gap-1 mt-2">
    <div class="flex items-center m-5 gap-5">
      <BaseButton type="danger" @click="deleteAndResetActivity(activity)">
        <BaseIcon :name="ICON_TRASH" class="size-8" />
      </BaseButton>
      <span class="w-full text-2xl truncate">{{ activity.name }}</span>
    </div>
    <div class="flex items-center gap-5 px-5">
      <BaseSelect
        :selected="activity.secondsToComplete || null"
        :options="PERIOD_SELECT_OPTIONS"
        placeholder="hh:mm"
        @select="
          updateActivity(activity, {
            secondsToComplete: $event || 0,
          })
        "
      />
      <RemainingActivitySeconds
        v-if="activity.secondsToComplete"
        :activity="activity"
      />
    </div>
  </li>
</template>
