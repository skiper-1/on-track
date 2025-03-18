<script setup>
import { BoltIcon, ListBulletIcon } from '@heroicons/vue/24/solid';
import {
  ChartBarIcon,
  CheckCircleIcon,
  ClockIcon,
} from '@heroicons/vue/24/outline';
import { ref } from 'vue';

const navItems = {
  timeline: ClockIcon,
  activities: ListBulletIcon,
  progress: ChartBarIcon,
};

const activePage = ref('timeline');
</script>

<template>
  <header
    class="sticky top-0 bg-gray-800 text-white flex items-center justify-between p-5"
  >
    <a href="#" class="flex items-center gap-1">
      <BoltIcon
        class="text-green-500 h-15 bg-gradient-to-tr from-blue-600 to-violet-900 rounded-2xl border-2 border-green-500 p-2"
      />
      <span
        class="bg-gradient-to-r bg-clip-text text-transparent from-green-400 to-blue-400 font-bold text-2xl"
      >
        On Track
      </span>
    </a>
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
  </header>
  <main class="flex grow">
    {{ activePage }}
  </main>
  <nav class="sticky bottom-0 bg-gray-700 text-white">
    <ul class="flex items-center justify-around">
      <li
        v-for="(icon, page) in navItems"
        :key="page"
        class="flex"
        @click="activePage = page"
      >
        <a
          :href="`#${page}`"
          class="flex gap-2 flex-col justify-center items-center py-3"
        >
          <component
            :is="icon"
            :class="[
              `h-12 text-gray-700 rounded-2xl bg-gradient-to-br p-1  ${
                activePage === page
                  ? 'from-red-500 to-yellow-500 '
                  : 'from-green-500 to-blue-500 '
              }`,
            ]"
          />
          <div
            :class="[
              'text-xl text-gray-400 capitalize',
              { 'text-white': activePage === page },
            ]"
          >
            {{ page }}
          </div>
        </a>
      </li>
    </ul>
  </nav>
</template>
