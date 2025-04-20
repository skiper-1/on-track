<script setup>
import { computed } from 'vue';
import { PAGE_TIMELINE } from '@/constants';
import { isNavItemValid } from '@/validators';
import { navigate, currentPage } from '@/router';
import { scrollToCurrentHour } from '@/timileneItems';
import BaseIcon from './BaseIcon.vue';

const props = defineProps({
  navItem: {
    type: Object,
    required: true,
    validator: isNavItemValid,
  },
});

const classes = computed(() => [
  'flex flex-col items-center gap-1 py-2 text-xs capitalize',
  props.navItem.page === currentPage.value
    ? 'bg-gray-800'
    : 'hover:bg-gray-700',
]);

const handleClick = () => {
  currentPage.value === PAGE_TIMELINE && props.navItem.page === PAGE_TIMELINE
    ? scrollToCurrentHour(true)
    : navigate(props.navItem.page);
};
</script>
<template>
  <li class="flex-1">
    <a :href="`#${navItem.page}`" :class="classes" @click="handleClick">
      <BaseIcon
        :name="navItem.icon"
        :class="[
          'h-10 text-gray-700 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 p-1',
          {
            'from-red-500 to-yellow-500': currentPage === navItem.page,
          },
        ]"
      />
      <div
        :class="[
          'text-xl font-extralight text-gray-400 capitalize',
          {
            'text-white': currentPage === navItem.page,
          },
        ]"
      >
        {{ navItem.page }}
      </div>
    </a>
  </li>
</template>
