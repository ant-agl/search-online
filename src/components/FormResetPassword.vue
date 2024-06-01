<template>
  <div class="text-center mb-4">
    <h5>Reset Password</h5>
    <p class="text-white-50">Reset your password with Jobcy.</p>
  </div>

  <form @submit.prevent="onSubmit" class="auth-form text-white">
    <div class="alert alert-warning text-center mb-4" role="alert">
      Enter your Email and instructions will be sent to you!
    </div>
    <div class="mb-4">
      <AppInput
        type="email"
        placeholder="Enter username or email"
        v-model:value="v.emailField.$model"
        label="Email"
        :errors="v.emailField.$errors"
      />
    </div>
    <div class="mt-3">
      <AppButton>Send Request</AppButton>
    </div>
  </form>

  <div class="mt-5 text-center text-white-50">
    <p>
      Remembered It ?
      <a
        href="sign-in.html"
        class="fw-medium text-white text-decoration-underline"
      >
        Go to Login
      </a>
    </p>
    <span class="badge bg-soft-info" v-if="errorMessage">{{
      errorMessage
    }}</span>
    <router-link to="/CheckAuth/resetPassword=true">as</router-link>
  </div>
</template>
<script setup>
import AppButton from "@/components/App/AppButton";
import AppInput from "@/components/App/AppInput";
import { useStore } from "vuex";
import { ref, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
const store = useStore();
const emailField = ref("");

const errorMessage = ref("");
const rules = computed(() => ({
  emailField: {
    email: helpers.withMessage("Вы ввели неверный email", email),
    required: helpers.withMessage("Вы должны написать email", required),
  },
}));
const v = useVuelidate(rules, { emailField });

const onSubmit = async () => {
  v.value.$touch();
  if (!v.value.$invalid) {
    try {
      errorMessage.value = "";
      await store.dispatch("userResetPassword", {
        email: emailField.value.trim(),
      });
    } catch (error) {
      errorMessage.value = error.response.data.detail;
    }
  }
};
</script>
