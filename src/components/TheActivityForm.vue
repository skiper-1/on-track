<script setup>
import { id } from '@/functions';
import { ICON_PLUS } from '@/icons';
import { nextTick, ref } from 'vue';
import { createActivity } from '@/activities';
import BaseIcon from './BaseIcon.vue';
import BaseButton from '@/components/BaseButton.vue';

const name = ref('');

const submit = async () => {
  createActivity({
    id: id(),
    name: name.value,
    secondsToComplete: 0,
  });

  name.value = '';

  await nextTick();

  window.scrollTo(0, document.body.scrollHeight);
};
</script>

<template>
  <form
    class="sticky bottom-0 bg-gray-600 h-16 flex items-center gap-5 py-2 px-8"
    @submit.prevent="submit"
  >
    <input
      type="text"
      class="w-full border-2 px-4 py-1 rounded-xl border-orange-400 outline-0"
      placeholder="Add activity..."
      v-model="name"
    />
    <BaseButton type="accept" :disabled="name.trim() === ''">
      <BaseIcon :name="ICON_PLUS" class="size-8" />
    </BaseButton>
  </form>
</template>
