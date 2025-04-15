<script setup>
import { ICON_CHECK_CIRCLE } from '@/icons';
import { HUNDRED_PERCENT, PAGE_PROGRESS } from '@/constants';
import { navigate } from '@/router';
import BaseIcon from './BaseIcon.vue';
import { useTotalProgress } from '@/composables/total-progress';

const { colorClass, percentage } = useTotalProgress();
</script>

<template>
  <a :href="`#${PAGE_PROGRESS}`" @click="navigate(PAGE_PROGRESS)">
    <div v-if="percentage < HUNDRED_PERCENT" class="flex gap-2 items-center">
      <div>
        Progress:
        <span>{{ percentage }}</span>
      </div>
      <div :class="['h-5 w-5 rounded-full', colorClass]"></div>
    </div>
    <div v-else class="flex gap-2">
      <div>Day complete!</div>

      <BaseIcon :name="ICON_CHECK_CIRCLE" class="h-8 text-lime-400" />
    </div>
  </a>
</template>
