<script setup>
import NavItem from './NavItem.vue';
import { NAV_ITEMS } from '@/constants';
import { isPageValid } from '@/validators';

const props = defineProps({
  currentPage: {
    type: String,
    required: true,
    validator: isPageValid,
  },
});
const emits = defineEmits({ navigate: isPageValid });
</script>

<template>
  <nav class="sticky bottom-0 bg-gray-700 text-white z-20 rounded-b-3xl">
    <ul class="flex items-center justify-around">
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :href="`#${page}`"
        @click="$emit('navigate', page)"
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
