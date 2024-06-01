<template>
  <div class="w-100">
    <div class="text-center mb-6">
      <h5>Welcome Back !</h5>
      <p class="text-white-70">Sign in to continue to Jobcy.</p>
    </div>
    <form @submit.prevent="onSubmit" class="auth-form">
      <div class="mb-3">
        <AppInput
          v-model:value="v.emailField.$model"
          placeholder="Enter your username"
          label="Email"
          :errors="v.emailField.$errors"
        />
      </div>
      <div class="mb-3">
        <AppInput
          v-model:value="v.passwordlField.$model"
          placeholder="Enter your password"
          label="Password"
          :errors="v.passwordlField.$errors"
        />
      </div>
      <div class="mb-4">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
          />
          <router-link to="/ResetPasswordView" class="float-end text-white">
            Forgot Password?
          </router-link>

          <label class="form-check-label" for="flexCheckDefault"
            >Remember me</label
          >
        </div>
      </div>
      <div class="text-center">
        <AppButton> Sign In </AppButton>
      </div>
    </form>
    <div class="mt-4 text-center">
      <p class="mb-0">
        Don't have an account ?
        <router-link
          to="SignUpView"
          class="fw-medium text-white text-decoration-underline"
        >
          Sign Up
        </router-link>
      </p>
    </div>
    <span class="badge bg-soft-info" v-if="errorMessage">{{
      errorMessage
    }}</span>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { minLength, helpers, email, required } from "@vuelidate/validators";
import AppInput from "@/components/App/AppInput";
import AppButton from "@/components/App/AppButton";

const store = useStore();

const emailField = ref("");
const passwordlField = ref("");
const errorMessage = ref("");
const rules = computed(() => ({
  emailField: {
    email: helpers.withMessage("Вы ввели неверный email", email),
    required: helpers.withMessage("Вы должны написать email", required),
  },
  passwordlField: {
    minLength: helpers.withMessage(
      "Минимальная длина 8 символов",
      minLength(8)
    ),
    required: helpers.withMessage("Вы должны написать пароль", required),
  },
}));
const v = useVuelidate(rules, {
  emailField,
  passwordlField,
});

const onSubmit = async () => {
  v.value.$touch();

  if (!v.value.$invalid) {
    try {
      errorMessage.value = "";
      const data = {
        email: emailField.value,
        password: passwordlField.value,
      };
      await store.dispatch("login", data);

      // router.push("/CheckAuth");
    } catch (error) {
      errorMessage.value = error.response.data.detail;
    }
  }
};
</script>
<style scoped>
.mb-6 {
  margin: 2rem 0;
}
</style>
