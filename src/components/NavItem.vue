<script setup>
import { navigate, currentPage } from '@/router';
import { isNavItemValid } from '@/validators';
import BaseIcon from './BaseIcon.vue';
import { PAGE_TIMELINE } from '@/constants';
import { scrollToCurrentHour } from '@/timileneItems';

const props = defineProps({
  navItem: {
    type: Object,
    required: true,
    validator: isNavItemValid,
  },
});

const handleClick = () => {
  currentPage.value === PAGE_TIMELINE && props.navItem.page === PAGE_TIMELINE
    ? scrollToCurrentHour(true)
    : navigate(props.navItem.page);
};
</script>
<template>
  <li class="flex-1">
    <a
      :href="`#${navItem.page}`"
      class="flex gap-2 flex-col justify-center items-center py-3"
      @click="handleClick"
    >
      <BaseIcon
        :name="navItem.icon"
        :class="[
          'h-12 text-gray-700 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 p-1',
          {
            'from-red-500 to-yellow-500': currentPage === navItem.page,
          },
        ]"
      />
      <div
        :class="[
          'text-xl text-gray-400 capitalize',
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
