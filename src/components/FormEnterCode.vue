<template>
  <div class="w-100">
    <div class="text-center">
      <template v-if="resetPassword">
        <h5>Введите код для восстановления пароля</h5>
      </template>
      <template v-else>
        <h5>Введите код для подтверждения авторизации</h5>
      </template>
    </div>
    <form @submit.prevent="authUser">
      <div class="mb-4">
        <AppInput
          type="text"
          v-model:value="v.codeField.$model"
          placeholder="Enter your code"
          :label="resetPassword ? 'Код восстановления' : 'Код активации'"
          :errors="v.codeField.$errors"
        />
      </div>

      <AppButton>Send</AppButton>
    </form>
    <span class="badge bg-soft-info" v-if="errorMessage">{{
      errorMessage
    }}</span>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { minLength, helpers, required } from "@vuelidate/validators";
import AppInput from "@/components/App/AppInput";
import AppButton from "@/components/App/AppButton";
import { useRouter, useRoute } from "vue-router";

const store = useStore();
const router = useRouter();
const route = useRoute();
const resetPassword = route.params.resetPassword;
const errorMessage = ref("");
const codeField = ref("");
const rules = computed(() => ({
  codeField: {
    minLength: helpers.withMessage(
      "Код должен состоять из 24 символов",
      minLength(24)
    ),
    required: helpers.withMessage("Вставьте код", required),
  },
}));
const v = useVuelidate(rules, {
  codeField,
});

const authUser = async () => {
  v.value.$touch();
  if (!v.value.$invalid) {
    try {
      errorMessage.value = "";
      if (resetPassword) {
        await store.dispatch("userRecoverPassword", {
          code: codeField.value.trim(),
        });
      } else {
        await store.dispatch("authActivate", { code: codeField.value.trim() });
      }

      router.push("/SignInView");
    } catch (error) {
      errorMessage.value = error.response.data.detail;
    }
  }
};
</script>
<style scoped>
.error {
  color: red;
  margin: 20px 0;
}
.text-center {
  margin-bottom: 20px;
}
</style>
