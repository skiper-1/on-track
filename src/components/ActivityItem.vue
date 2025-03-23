<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline';
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import { ref } from 'vue';
import { PERIOD_SELECT_OPTIONS } from '@/constants';
import { isUndefined, isValidActivity } from '@/validators';

const secondsToCompleted = ref();

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isValidActivity,
  },
});

const emit = defineEmits({ removeActivity: isUndefined });
</script>

<template>
  <li class="flex flex-col gap-1">
    <div class="flex items-center mx-7 gap-5">
      <BaseButton type="danger" @click="emit('removeActivity')">
        <TrashIcon class="size-8 p-1" />
      </BaseButton>
      <span class="w-full text-2xl truncate">{{ activity.name }}</span>
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
