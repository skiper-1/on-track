<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/outline';
import { PAGE_PROGRESS } from '@/constants';
import { navigate } from '@/router';
</script>

<template>
  <a :href="`#${PAGE_PROGRESS}`" @click="navigate(PAGE_PROGRESS)">
    <div v-if="true" class="flex gap-2">
      <div>Day complete!</div>
      <CheckCircleIcon class="size-6 text-lime-500" />
    </div>
    <div v-else class="flex gap-2">
      <div>Progress: <span>20%</span></div>
      <div class="h-5 w-5 bg-red-500 rounded-full"></div>
    </div>
  </a>
</template>
