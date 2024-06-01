<template>
  <div class="w-100">
    <div class="text-center">
      <h5>Let's Get Started</h5>
      <p class="text-white-70">
        Sign Up and get access to all the features of Jobcy
      </p>
    </div>
    <form @submit.prevent="onSubmit" class="auth-form">
      <div class="mb-3">
        <AppInput
          v-model:value="v.login.$model"
          :errors="v.login.$errors"
          type="text"
          placeholder="Enter your username"
          label="Username"
        />
      </div>
      <div class="mb-3">
        <AppInput
          v-model:value="v.emailField.$model"
          :errors="v.emailField.$errors"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
      </div>
      <div class="mb-3">
        <AppInput
          v-model:value="v.passwordlField.$model"
          :errors="v.passwordlField.$errors"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </div>
      <div class="mb-4">
        <div class="form-check">
          <AppInput
            :errors="v.checkField.$errors"
            class="form-check-input"
            type="checkbox"
            v-model:checked="v.checkField.$model"
            label="I agree to the"
          >
            <a
              href="javascript:void(0)"
              class="text-white text-decoration-underline"
            >
              Terms and conditions
            </a>
          </AppInput>
        </div>
      </div>
      <div class="text-center">
        <AppButton>Sign Up</AppButton>
      </div>
    </form>
    <div class="mt-3 text-center">
      <p class="mb-0">
        Already a member?
        <router-link
          to="/SignInView"
          class="fw-medium text-white text-decoration-underline"
        >
          Sign In</router-link
        >
        <!-- <a href="sign-in.html"> </a> -->
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
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const login = ref("");
const emailField = ref("");
const passwordlField = ref("");
const checkField = ref(false);
const errorMessage = ref("");
const rules = computed(() => ({
  login: {
    minLength: helpers.withMessage(
      "Минимальная длина 6 символов",
      minLength(6)
    ),
    required: helpers.withMessage("Вы должны написать логин", required),
  },
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
  checkField: {
    required: helpers.withMessage("Вы должны принять условия", required),
  },
}));
const v = useVuelidate(rules, {
  login,
  emailField,
  passwordlField,
  checkField,
});

const onSubmit = async () => {
  v.value.$touch();

  if (!v.value.$invalid) {
    try {
      errorMessage.value = "";
      const data = {
        name: login.value,
        email: emailField.value,
        password: passwordlField.value,
      };
      await store.dispatch("registrationUserData", data);

      router.push("/CheckAuth");
    } catch (error) {
      errorMessage.value = error.response.data.detail;
    }
  }
};
</script>

<style scoped>
.error-message {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}
</style>
