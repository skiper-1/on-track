<script setup>
import { ICON_CHECK_CIRCLE } from '@/icons';
import { PAGE_PROGRESS } from '@/constants';
import { navigate } from '@/router';
import BaseIcon from './BaseIcon.vue';
</script>

<template>
  <a :href="`#${PAGE_PROGRESS}`" @click="navigate(PAGE_PROGRESS)">
    <div v-if="true" class="flex gap-2 items-center">
      <div>Day complete!</div>
      <BaseIcon :name="ICON_CHECK_CIRCLE" class="h-8 text-lime-500" />
    </div>
    <div v-else class="flex gap-2">
      <div>Progress: <span>20%</span></div>
      <div class="h-5 w-5 bg-red-500 rounded-full"></div>
    </div>
  </a>
</template>
