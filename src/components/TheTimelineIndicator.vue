<script setup>
import {
  HUNDRED_PERCENT,
  MILLISECONDS_IN_SECOND,
  MINUTES_IN_HOUR,
  SECONDS_IN_DAY,
  SECONDS_IN_MINUTE,
} from '@/constants';
import { ref, computed, watchEffect, onActivated, onDeactivated } from 'vue';

const calculateSecondsSinceMidnight = () => {
  const now = new Date();

  return (
    SECONDS_IN_MINUTE * MINUTES_IN_HOUR * now.getHours() +
    SECONDS_IN_MINUTE * now.getMinutes() +
    now.getSeconds()
  );
};

const secondsSinceMidnight = ref(calculateSecondsSinceMidnight());

const indicatorRef = ref();

let timer = null;

onActivated(() => {
  secondsSinceMidnight.value = calculateSecondsSinceMidnight();

  timer = setInterval(
    () => secondsSinceMidnight.value++,
    MILLISECONDS_IN_SECOND
  );
});

onDeactivated(() => {
  clearInterval(timer);
});

const topOffset = computed(
  () =>
    (calculateSecondsSinceMidnightInPercentage.value * getTimelimeHeight()) /
    HUNDRED_PERCENT
);

const calculateSecondsSinceMidnightInPercentage = computed(
  () => (HUNDRED_PERCENT * secondsSinceMidnight.value) / SECONDS_IN_DAY
);

watchEffect(() => {
  if (secondsSinceMidnight.value > SECONDS_IN_DAY) {
    secondsSinceMidnight.value = 0;
  }
});

const getTimelimeHeight = () => {
  return indicatorRef.value?.parentNode.getBoundingClientRect().height;
};
</script>

<template>
  <hr
    ref="indicatorRef"
    class="pointer-events-none absolute z-10 w-full border-b-2 border-orange-400"
    :style="{ top: `${topOffset}px` }"
  />
</template>
