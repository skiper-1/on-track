<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline';
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import { ref } from 'vue';
import { PERIOD_SELECT_OPTIONS } from '@/constants';
import { isValidActivity } from '@/validators';

const secondsToCompleted = ref();

const props = defineProps({
  activity: {
    type: String,
    require: true,
    validator: isValidActivity,
  },
});
</script>

<template>
  <li class="flex flex-col gap-1">
    <div class="flex items-center mx-7 gap-5">
      <BaseButton>
        <TrashIcon class="size-8 text-red-500 hover:text-red-300" />
      </BaseButton>
      <span class="w-full text-2xl truncate">{{ activity }}</span>
    </div>
    <div>
      <BaseSelect
        :selected="secondsToCompleted"
        :options="PERIOD_SELECT_OPTIONS"
        placeholder="hh:mm"
        @select="secondsToCompleted = $event"
        @reset="secondsToCompleted = null"
      />
    </div>
  </li>
</template>
