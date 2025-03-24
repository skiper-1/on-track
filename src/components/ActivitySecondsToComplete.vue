<script setup>
import { formatSeconds } from '@/functions';

const props = defineProps({
  seconds: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="border-2 rounded-xl p-2 border-amber-200 text-amber-200">
    {{ formatSeconds(seconds) }}
  </div>
</template>
