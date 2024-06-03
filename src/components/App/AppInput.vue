<template>
  <div>
    <label :style="{ width: width }">
      {{ label }} <slot></slot>
      <input
        :type="type"
        :class="inputClass"
        :value="value"
        :placeholder="placeholder"
        :checked="checked"
        @input="updateValue"
        @change="updateChecked"
      />
    </label>
    <TransitionGroup name="list">
      <div v-for="error of errors" :key="error.$uid">
        <span class="badge bg-danger">{{ error.$message }}</span>
      </div>
    </TransitionGroup>
  </div>
</template>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.7s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
<script setup>
import { defineProps, defineEmits, toRefs } from "vue";
const emit = defineEmits(["update:value", "update:checked"]);
const props = defineProps({
  errors: {
    type: Array,
    required: false,
  },

  class: {
    type: String,
    default: "form-control",
  },
  checked: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "100%",
  },
  placeholder: {
    type: String,
  },

  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    required: true,
  },
});
const { class: inputClass } = toRefs(props);
const updateValue = (e) => {
  emit("update:value", e.target.value);
};
const updateChecked = (e) => {
  if (props.type === "checkbox") {
    emit("update:checked", e.target.checked);
  }
};
</script>
