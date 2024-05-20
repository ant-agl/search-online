<template>
  <input
    class="form-control"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  name: "AppInput",
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    },
  },
  inheritAttrs: true,
};
</script>
