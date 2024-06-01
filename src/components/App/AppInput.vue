<template>
  <div>
    <label :style="{ width: width }">
      {{ label }} <slot></slot>
      <input
        :class="classProps"
        :type="type"
        :value="value"
        :placeholder="placeholder"
        :checked="checked"
        @input="updateValue"
        @change="updateChecked"
      />
    </label>
    <TransitionGroup>
      <div v-for="error of errors" :key="error.$uid">
        <!-- <div class="red">
          {{ error.$message }}
        </div> -->
        <span class="badge bg-soft-info">{{ error.$message }}</span>
      </div>
    </TransitionGroup>
  </div>
</template>
<style scoped>
.red {
  color: brown;
}
</style>
<script setup>
const emit = defineEmits(["update:value", "update:checked"]);
const props = defineProps({
  errors: {
    type: Array,
    required: false,
  },

  classProps: {
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
const updateValue = (e) => {
  emit("update:value", e.target.value);
};
const updateChecked = (e) => {
  if (props.type === "checkbox") {
    emit("update:checked", e.target.checked);
  }
};
</script>
