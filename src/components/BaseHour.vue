<script setup>
import { isHourValid } from '@/validators';
import { currentHour } from '@/functions';

const props = defineProps({
  hour: {
    type: Number,
    required: true,
    validator: isHourValid,
  },
});

const classes = [
  'absolute -top-4 left-1/2 -translate-x-1/2 border-2 border-violet-500 px-3 rounded-2xl z-10 bg-gradient-to-br from-green-500 to-blue-500 text-xl focus:outline-none focus:border-violet-400',
  {
    'text-gray-100 from-orange-500 to-yellow-600': props.hour === currentHour(),
  },
];

const formattedHour = `${props.hour.toString().padStart(2, 0)}:00`;
</script>

<template>
  <div :class="classes">
    {{ formattedHour }}
  </div>
</template>
