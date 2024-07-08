<template>
  <label>
    {{ label }}
    <select
      class="form-control mt-3"
      @change="updateValue"
      :name="name"
      ref="select"
    ></select>
  </label>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Choices from "choices.js";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
  label: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
const select = ref(null);
let choicesInstance = null;

onMounted(() => {
  choicesInstance = new Choices(select.value, {
    allowHTML: true,
    removeItemButton: true,
    noResultsText: "Ничего не найдено",
  });

  choicesInstance.setChoices(props.options, "id", "name", false);

  // Set default value after Choices initialization
  if (props.modelValue) {
    choicesInstance.setChoiceByValue(props.modelValue);
  }
});

const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};

// Watch for changes in modelValue and update Choices
watch(
  () => props.modelValue,
  (newValue) => {
    if (choicesInstance) {
      choicesInstance.setChoiceByValue(newValue);
    }
  }
);
</script>

<style scoped>
label {
  width: 100%;
}
</style>
