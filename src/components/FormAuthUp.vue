<template>
  <div class="w-100">
    <div class="text-center">
      <h5>Let's Get Started</h5>
      <p class="text-white-70">
        Sign Up and get access to all the features of Jobcy
      </p>
    </div>
    <form action="index.html" class="auth-form">
      <div class="mb-3">
        <label for="usernameInput" class="form-label">Username</label>
        <AppInput
          v-model="inputValueUsername"
          placeholder="Enter your username"
        />
      </div>
      <div class="mb-3">
        <label for="passwordInput" class="form-label">Email</label>
        <AppInput
          v-model="inputValueEmail"
          type="email"
          id="emailInput"
          placeholder="Enter your email"
        />
      </div>
      <div class="mb-3">
        <label for="emailInput" class="form-label">Password</label>
        <AppInput
          v-model="inputValuePassword"
          type="password"
          id="passwordInput"
          placeholder="Enter your password"
        />
      </div>
      <div class="mb-4">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault"
            >I agree to the
            <a
              href="javascript:void(0)"
              class="text-white text-decoration-underline"
              >Terms and conditions</a
            ></label
          >
        </div>
      </div>
      <div class="text-center">
        <AppButton>Sign Up</AppButton>
      </div>
    </form>
    <div class="mt-3 text-center">
      <p class="mb-0">
        Already a member ?
        <a
          href="sign-in.html"
          class="fw-medium text-white text-decoration-underline"
        >
          Sign In
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import AppInput from "@/components/App/AppInput";
import AppButton from "@/components/App/AppButton";
export default {
  name: "FormAuthUp",
  components: {
    AppInput,
    AppButton,
  },
  data() {
    return {
      inputValueUsername: "",
      inputValueEmail: "",
      inputValuePassword: "",
    };
  },
};
</script>
