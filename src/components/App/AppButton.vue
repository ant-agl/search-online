<template>
  <button type="submit" :class="classBtn">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "AppButton",
  props: {
    classBtn: {
      type: String,
      default: "btn btn-white btn-hover w-100",
    },
  },
};
</script>
