<script setup>
import BaseIcon from './BaseIcon.vue';
import { PAGE_TIMELINE } from '@/constants';
import { navigate, currentPage } from '@/router';
import { scrollToCurrentHour } from '@/timileneItems.js';

const handleClick = () => {
  currentPage.value === PAGE_TIMELINE
    ? scrollToCurrentHour()
    : navigate(PAGE_TIMELINE);
};
</script>

<template>
  <a
    :href="`#${PAGE_TIMELINE}`"
    class="flex items-center gap-1"
    @click="handleClick"
  >
    <BaseIcon
      name="Bolt"
      class="text-green-500 h-15 bg-gradient-to-tr from-blue-600 to-violet-900 rounded-2xl border-2 border-green-500 p-2"
    />
    <span
      class="bg-gradient-to-r bg-clip-text text-transparent from-green-400 to-blue-400 font-bold text-2xl"
    >
      On Track
    </span>
  </a>
</template>
