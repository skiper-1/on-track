<script>
export default {
  inheritAttrs: false,
};
</script>
<template>
  <li class="flex-1">
    <a
      v-bind="$attrs"
      class="flex gap-2 flex-col justify-center items-center py-3"
    >
      <slot></slot>
    </a>
  </li>
</template>
