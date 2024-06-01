<template>
  <input v-model="v$.name.$model" />
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      name: "",
    };
  },
  validations() {
    return {
      name: { required },
    };
  },
};
</script>
