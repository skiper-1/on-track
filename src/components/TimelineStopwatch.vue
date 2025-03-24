<script setup>
import { isHourValid, isNumber } from '@/validators';
import BaseButton from './BaseButton.vue';
import { PlayIcon, PauseIcon, ArrowPathIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';
import { formatSeconds } from '@/functions';
const props = defineProps({
  seconds: {
    type: Number,
    default: 0,
    validator: isNumber,
  },
  hour: {
    type: Number,
    required: true,
    validator: isHourValid,
  },
});

const seconds = ref(props.seconds);

const isRunning = ref(false);

const isStartButtonDisabled = props.hour !== new Date().getHours();

const start = () => {
  console.log('start');
  isRunning.value = setInterval(() => {
    seconds.value++;
  }, 10);
};

const stop = () => {
  console.log('stop');
  clearInterval(isRunning.value);
  isRunning.value = false;
};

const reset = () => {
  console.log('reset');
  stop();
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
