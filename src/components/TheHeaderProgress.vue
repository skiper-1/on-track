<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <a href="#">
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
