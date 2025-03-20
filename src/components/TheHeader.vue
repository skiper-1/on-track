<script setup>
import TheLogo from '@/components/TheLogo.vue';
import TheHeaderProgress from '@/components/TheHeaderProgress.vue';
import { PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants';
import { isPageValid } from '@/validators';

const emits = defineEmits({
  navigate: isPageValid,
});
</script>

<template>
  <header
    class="sticky top-0 bg-gray-800 text-white flex items-center justify-between p-5 z-20 rounded-t-3xl"
  >
    <TheLogo @click="$emit('navigate', PAGE_TIMELINE)" />
    <TheHeaderProgress @click="$emit('navigate', PAGE_PROGRESS)" />
  </header>
</template>
