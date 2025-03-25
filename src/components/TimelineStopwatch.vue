<script setup>
import BaseButton from './BaseButton.vue';
import { isTimelineItemValid } from '@/validators';
import { PlayIcon, PauseIcon, ArrowPathIcon } from '@heroicons/vue/24/outline';
import { ref, watch } from 'vue';
import { currentHour, formatSeconds } from '@/functions';
import { updateTimelineItemActivitySeconds } from '@/timileneItems';

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
    updateTimelineItemActivitySeconds(props.timelineItem, seconds.value);
  }
);

const start = () => {
  isRunning.value = setInterval(() => {
    updateTimelineItemActivitySeconds(
      props.timelineItem,
      props.timelineItem.activitySeconds + 1
    );
    seconds.value++;
  }, 10);
};

const stop = () => {
  clearInterval(isRunning.value);
  isRunning.value = false;
};

const reset = () => {
  stop();

  updateTimelineItemActivitySeconds(
    props.timelineItem,
    props.timelineItem.activitySeconds - seconds.value
  );

  seconds.value = 0;
};
</script>

<template>
  <div class="flex w-full pt-2">
    <BaseButton type="reset" @click="reset" :disabled="!seconds">
      <ArrowPathIcon class="size-8" />
    </BaseButton>
    <div class="flex flex-grow items-center justify-center text-xl">
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton type="pause" @click="stop" v-show="isRunning">
      <PauseIcon class="size-8" />
    </BaseButton>
    <BaseButton
      type="play"
      @click="start"
      v-show="!isRunning"
      :disabled="isStartButtonDisabled"
    >
      <PlayIcon class="size-8" />
    </BaseButton>
  </div>
</template>
