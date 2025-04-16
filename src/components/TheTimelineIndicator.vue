<script setup>
import { HUNDRED_PERCENT } from '@/constants';
import { ref, computed } from 'vue';
import { secondsSinceMidnightInPercentage } from '@/time';

const indicatorRef = ref();

const topOffset = computed(
  () =>
    (secondsSinceMidnightInPercentage.value + getTimelimeHeight()) /
    HUNDRED_PERCENT
);

const getTimelimeHeight = () =>
  indicatorRef.value?.parentNode.getBoundingClientRect().height();
</script>

<template>
  <hr
    ref="indicatorRef"
    class="pointer-events-none absolute z-10 w-full border-b-2 border-orange-400"
    :style="{ top: `${topOffset}px` }"
  />
</template>
