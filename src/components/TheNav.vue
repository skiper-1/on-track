<script setup>
import NavItem from './NavItem.vue';
import { NAV_ITEMS } from '@/constants';
</script>

<template>
  <nav class="sticky bottom-0 bg-gray-700 text-white z-20">
    <ul class="flex items-center justify-around">
      <NavItem
        v-for="navItem in NAV_ITEMS"
        :key="navItem.page"
        :nav-item="navItem"
      >
      </NavItem>
    </ul>
  </nav>
</template>
