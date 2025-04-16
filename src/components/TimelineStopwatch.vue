<script setup>
import BaseButton from './BaseButton.vue';
import { isTimelineItemValid } from '@/validators';
import { formatSeconds } from '@/functions';
import BaseIcon from './BaseIcon.vue';
import { ICON_PAUSE, ICON_PLAY, ICON_ARROW_PATH } from '@/icons';
import {
  resetTimelineItemTimer,
  startTimelineItemTimer,
  stopTimelineItemTimer,
  timelineItemTimer,
} from '@/timelineitem-timer';
import { now } from '@/time';
import { activeTimelineItem } from '@/timileneItems';

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid,
  },
});
</script>

<template>
  <div class="flex w-full pt-2">
    <BaseButton
      type="reset"
      @click="resetTimelineItemTimer(timelineItem)"
      :disabled="!timelineItem.activitySeconds"
    >
      <BaseIcon :name="ICON_ARROW_PATH" />
    </BaseButton>
    <div class="flex flex-grow items-center justify-center text-xl">
      {{ formatSeconds(timelineItem.activitySeconds) }}
    </div>
    <BaseButton
      type="pause"
      @click="stopTimelineItemTimer"
      v-show="timelineItem === activeTimelineItem"
    >
      <BaseIcon :name="ICON_PAUSE" />
    </BaseButton>
    <BaseButton
      type="play"
      @click="startTimelineItemTimer(timelineItem)"
      v-show="!timelineItemTimer && timelineItem.hour === now.getHours()"
      :disabled="!timelineItem.hour == now.getHours()"
    >
      <BaseIcon :name="ICON_PLAY" />
    </BaseButton>
  </div>
</template>
