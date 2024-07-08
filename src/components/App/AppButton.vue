<template>
  <button :type="type" :class="classBtn">
    <slot></slot>
  </button>
</template>
<script setup>
defineProps({
  classBtn: {
    type: String,
    default: "btn btn-white btn-hover w-100",
  },
  type: {
    type: String,
    default: "submit",
  },
});
</script>
