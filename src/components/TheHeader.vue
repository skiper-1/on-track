<script setup>
import TheLogo from '@/components/TheLogo.vue';
import TheHeaderProgress from '@/components/TheHeaderProgress.vue';
</script>

<template>
  <header
    class="sticky top-0 bg-gray-800 text-white flex items-center justify-between p-5"
  >
    <TheLogo />
    <TheHeaderProgress />
  </header>
</template>
