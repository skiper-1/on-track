<script setup>
import TheNav from '@/components/TheNav.vue';
import TheHeader from '@/components/TheHeader.vue';
import { currentPage, routes } from './router';
</script>

<template>
  <div
    class="flex flex-col bg-gradient-to-br from-stone-800/50 to-blue-900/50 min-h-screen"
  >
    <TheHeader />
    <keep-alive>
      <component :is="routes[currentPage]" class="min-h-[100vh]"
    /></keep-alive>
    <TheNav />
  </div>
</template>
