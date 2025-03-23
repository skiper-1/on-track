<script>
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_ACCEPT,
} from '@/constants';
import { isButtonValid } from '@/validators';

const typeClasses = {
  [BUTTON_TYPE_DANGER]:
    'border-red-500 text-red-500 hover:text-red-300 focus:border-red-400 hover:border-red-300',
  [BUTTON_TYPE_NEUTRAL]:
    'border-blue-500 text-blue-500 hover:text-blue-300 focus:border-blue-400 hover:border-blue-300',
  [BUTTON_TYPE_ACCEPT]:
    'border-green-500 text-green-500 hover:text-green-300 focus:border-green-400 hover:border-green-300',
};
</script>

<script setup>
const props = defineProps({
  type: {
    default: BUTTON_TYPE_NEUTRAL,
    type: String,
    validator: isButtonValid,
  },
});
</script>

<template>
  <button
    p-2
    :class="`border-2
    rounded-xl
    h-10
    bg-gradient-to-br
    from-gray-500
    to-gray-900
    flex
    items-center
    focus:outline-none
    disabled:opacity-50
    disabled:cursor-not-allowed
    ${typeClasses[type]}`"
  >
    <slot></slot>
  </button>
</template>
