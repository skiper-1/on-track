<script setup>
import BaseButton from './BaseButton.vue';
import { isTimelineItemValid } from '@/validators';
import { ref, watch } from 'vue';
import { currentHour, formatSeconds } from '@/functions';
import { updateTimelineItem } from '@/timileneItems';
import BaseIcon from './BaseIcon.vue';
import { ICON_PAUSE, ICON_PLAY, ICON_ARROW_PATH } from '@/icons';

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid,
  },
});

const seconds = ref(props.timelineItem.activitySeconds);

const isRunning = ref(false);

const isStartButtonDisabled = props.timelineItem.hour !== currentHour();

watch(
  () => props.timelineItem.activityId,
  () => {
    updateTimelineItem(props.timelineItem, { actiitySeconds: seconds.value });
  }
);

const start = () => {
  isRunning.value = setInterval(() => {
    updateTimelineItem(props.timelineItem, {
      activitySeconds: props.timelineItem.activitySeconds + 1,
    });
    seconds.value++;
  }, 10);
};

const stop = () => {
  clearInterval(isRunning.value);
  isRunning.value = false;
};

const reset = () => {
  stop();

  updateTimelineItem(props.timelineItem, {
    activitySeconds: props.timelineItem.activitySeconds - seconds.value,
  });

  seconds.value = 0;
};
</script>

<template>
  <div class="flex w-full pt-2">
    <BaseButton type="reset" @click="reset" :disabled="!seconds">
      <BaseIcon :name="ICON_ARROW_PATH" />
    </BaseButton>
    <div class="flex flex-grow items-center justify-center text-xl">
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton type="pause" @click="stop" v-show="isRunning">
      <BaseIcon :name="ICON_PAUSE" />
    </BaseButton>
    <BaseButton
      type="play"
      @click="start"
      v-show="!isRunning"
      :disabled="isStartButtonDisabled"
    >
      <BaseIcon :name="ICON_PLAY" />
    </BaseButton>
  </div>
</template>
