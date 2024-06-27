<script>
import { ref, onMounted, watch } from "vue";
import Choices from "choices.js";

export default {
  props: ["options", "name", "modelValue"],
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const select = ref(null);

    onMounted(() => {
      const choices = new Choices(select.value, {
        allowHTML: true,
        removeItemButton: true,
        noResultsText: "Ничего не найдено",
      });

      choices.setChoices(props.options, "id", "name", false);

      // Устанавливаем значение по умолчанию после инициализации Choices
      if (props.modelValue) {
        choices.setChoiceByValue(props.modelValue);
      }
    });

    const updateValue = (event) => {
      emit("update:modelValue", event.target.value);
    };

    // Наблюдаем за изменениями modelValue и обновляем Choices
    watch(
      () => props.modelValue,
      (newValue) => {
        const choices = select.value.choices;
        if (choices) {
          choices.setChoiceByValue(newValue);
        }
      }
    );

    return {
      select,
      updateValue,
    };
  },
};
</script>
<style scoped>
@import "@/assets/libs/choices.js/public/assets/styles/base.min.css";
@import "@/assets/libs/choices.js/public/assets/styles/choices.min.css";
.mt-3 {
  margin-top: 0 !important;
}
.choices__inner {
  min-height: 47px !important;
}
.choices[data-type*="select-one"] .choices__inner {
  min-height: 47px !important;
}
.choices__list--dropdown .choices__item {
  min-height: 50px; /* Замените 50px на нужное значение */
}
</style>
<template>
  <div class="mt-3">
    <select
      class="form-control mt-3"
      @change="updateValue"
      :name="name"
      ref="select"
    ></select>
  </div>
</template>
