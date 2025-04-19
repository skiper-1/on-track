<script>
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_ACCEPT,
  BUTTON_TYPE_PLAY,
  BUTTON_TYPE_PAUSE,
  BUTTON_TYPE_RESET,
} from '@/constants';

const typeClasses = {
  [BUTTON_TYPE_DANGER]:
    'border-red-500 text-red-500 hover:text-red-300 focus:border-red-400 hover:border-red-300',
  [BUTTON_TYPE_NEUTRAL]:
    'border-blue-500 text-blue-500 hover:text-blue-300 focus:border-blue-400 hover:border-blue-300',
  [BUTTON_TYPE_ACCEPT]:
    'border-green-500 text-green-500 hover:text-green-300 focus:border-green-400 hover:border-green-300',
  [BUTTON_TYPE_PLAY]:
    'border-orange-500 text-orange-500 hover:text-orange-300 focus:border-orange-400 hover:border-orange-300',
  [BUTTON_TYPE_PAUSE]:
    'border-pink-500 text-red-500 hover:text-red-300 focus:border-red-400 hover:border-red-300',
  [BUTTON_TYPE_RESET]:
    'border-yellow-500 text-yellow-500 hover:text-yellow-300 focus:border-yellow-400 hover:border-yellow-300',
};
</script>

<script setup>
import { isButtonTypeValid } from '@/validators';

const props = defineProps({
  type: {
    default: BUTTON_TYPE_NEUTRAL,
    type: String,
    validator: isButtonTypeValid,
  },
});

const classes = [
  `px-2
    rounded-xl
    h-10
    bg-gray-700
    shadow-xl
    focus:outline-none
    disabled:opacity-50
    disabled:cursor-not-allowed`,
  typeClasses[props.type],
];
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>
