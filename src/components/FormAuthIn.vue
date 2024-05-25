<template>
  <div class="w-100">
    <div class="text-center mb-6">
      <h5>Welcome Back !</h5>
      <p class="text-white-70">Sign in to continue to Jobcy.</p>
    </div>
    <form action="index.html" class="auth-form">
      <div class="mb-3">
        <label for="usernameInput" class="form-label">Username</label>
        <input
          v-model="login"
          type="text"
          class="form-control"
          id="usernameInput"
          placeholder="Enter your username"
          required
        />
      </div>
      <div class="mb-3">
        <label for="passwordInput" class="form-label">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="passwordInput"
          placeholder="Enter your password"
          required
        />
      </div>
      <div class="mb-4">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
          />
          <a href="reset-password.html" class="float-end text-white"
            >Forgot Password?</a
          >
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
        <a
          href="sign-up.html"
          class="fw-medium text-white text-decoration-underline"
        >
          Sign Up
        </a>
      </p>
    </div>
  </div>
</template>
<script>
import AppButton from "@/components/App/AppButton";
export default {
  name: "FormAuthIn",
  components: {
    AppButton,
  },
  data() {
    return {
      login: "",
      password: "",
    };
  },
};
</script>
<style scoped>
.mb-6 {
  margin: 2rem 0;
}
</style>
