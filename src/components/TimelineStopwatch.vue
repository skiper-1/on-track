<script setup>
import { ICON_PAUSE, ICON_PLAY, ICON_ARROW_PATH } from '@/icons';
import { formatSeconds } from '@/functions';
import { isTimelineItemValid } from '@/validators';
import { activeTimelineItem } from '@/timileneItems';
import {
  resetTimelineItemTimer,
  startTimelineItemTimer,
  stopTimelineItemTimer,
} from '@/timelineitem-timer';
import { now } from '@/time';
import BaseIcon from './BaseIcon.vue';
import BaseButton from './BaseButton.vue';

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid,
  },
});
</script>

<template>
  <div class="flex w-full pt-3">
    <BaseButton
      type="reset"
      @click="resetTimelineItemTimer(timelineItem)"
      :disabled="!timelineItem.activitySeconds"
    >
      <BaseIcon :name="ICON_ARROW_PATH" />
    </BaseButton>
    <div
      class="flex flex-grow items-center justify-center text-xl text-gray-300"
    >
      {{ formatSeconds(timelineItem.activitySeconds) }}
    </div>
    <BaseButton
      v-if="timelineItem === activeTimelineItem"
      type="pause"
      @click="stopTimelineItemTimer"
    >
      <BaseIcon :name="ICON_PAUSE" />
    </BaseButton>
    <BaseButton
      v-else
      type="play"
      @click="startTimelineItemTimer(timelineItem)"
      :disabled="timelineItem.hour !== now.getHours()"
    >
      <BaseIcon :name="ICON_PLAY" />
    </BaseButton>
  </div>
</template>
