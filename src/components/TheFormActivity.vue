<script setup>
import { PlusIcon } from '@heroicons/vue/16/solid';
import BaseButton from '@/components/BaseButton.vue';
import { nextTick, ref } from 'vue';
import { isValidActivity } from '@/validators';
import { id } from '@/functions';

const name = ref('');

const emit = defineEmits({
  submit: isValidActivity,
});

const submit = async () => {
  emit('submit', { id: id(), name: name.value, secondsToComplete: 0 });

  name.value = '';

  await nextTick();

  window.scrollTo(0, document.body.scrollHeight);
};
</script>

<template>
  <form
    class="sticky bottom-[108px] bg-gray-600 h-20 flex items-center gap-5 px-7"
    @submit.prevent="submit()"
  >
    <input
      type="text"
      class="w-full border-2 p-1 rounded-xl border-orange-400"
      placeholder="Add activity..."
      v-model="name"
    />
    <BaseButton type="accept" :disabled="name.trim() === ''">
      <PlusIcon class="size-8" />
    </BaseButton>
  </form>
</template>

<style scoped></style>
