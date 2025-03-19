<script setup>
import { ListBulletIcon } from '@heroicons/vue/24/solid';
import { ChartBarIcon, ClockIcon } from '@heroicons/vue/24/outline';
import NavItem from './NavItem.vue';
import { ref } from 'vue';
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '@/constants';

const navItems = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon,
};

const normalizeHash = () => {
  let hash = window.location.hash.slice(1);

  if (Object.keys(navItems).includes(hash)) {
    return hash;
  } else {
    window.location.hash = PAGE_TIMELINE;
    return PAGE_TIMELINE;
  }
};

const currentPage = ref(normalizeHash());
</script>

<template>
  <nav class="sticky bottom-0 bg-gray-700 text-white">
    <ul class="flex items-center justify-around">
      <NavItem
        v-for="(icon, page) in navItems"
        :key="page"
        :href="`#${page}`"
        @click="currentPage = page"
      >
        <component
          :is="icon"
          :class="[
            'h-12 text-gray-700 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 p-1',
            { 'from-red-500 to-yellow-500': currentPage === page },
          ]"
        />
        <div
          :class="[
            'text-xl text-gray-400 capitalize',
            { 'text-white': currentPage === page },
          ]"
        >
          {{ page }}
        </div>
      </NavItem>
    </ul>
  </nav>
</template>
