<script setup>
import BaseButton from './BaseButton.vue';
import { isTimelineItemValid } from '@/validators';
import { formatSeconds } from '@/functions';
import BaseIcon from './BaseIcon.vue';
import { ICON_PAUSE, ICON_PLAY, ICON_ARROW_PATH } from '@/icons';
import { useStopwatch } from '@/composables/stopwatch';
import { updateTimelineItem } from '@/timileneItems';
import { watchEffect } from 'vue';
import { now } from '@/time';

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid,
  },
});

const { seconds, isRunning, start, stop, reset } = useStopwatch(
  props.timelineItem.activitySeconds
);

watchEffect(() => {
  if (props.timelineItem.hour !== now.value.getHours() && isRunning.value) {
    stop();
  }
});

watchEffect(() =>
  updateTimelineItem(props.timelineItem, { activitySeconds: seconds.value })
);
</script>

<template>
  <div class="flex w-full pt-2">
    <BaseButton
      type="reset"
      @click="reset"
      :disabled="!timelineItem.activitySeconds"
    >
      <BaseIcon :name="ICON_ARROW_PATH" />
    </BaseButton>
    <div class="flex flex-grow items-center justify-center text-xl">
      {{ formatSeconds(timelineItem.activitySeconds) }}
    </div>
    <BaseButton type="pause" @click="stop" v-show="isRunning">
      <BaseIcon :name="ICON_PAUSE" />
    </BaseButton>
    <BaseButton
      type="play"
      @click="start"
      v-show="!isRunning"
      :disabled="timelineItem.hour !== now.getHours()"
    >
      <BaseIcon :name="ICON_PLAY" />
    </BaseButton>
  </div>
</template>
