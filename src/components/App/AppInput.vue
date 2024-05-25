<template>
  <div>
    <input
      :type="inputType"
      class="form-control"
      :value="modelValue"
      @input="onInput"
      @blur="validate"
      v-bind="$attrs"
    />

    <div class="alert bg-soft-danger" role="alert" v-if="errorMessage">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AppInput",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator: function (value) {
        return ["username", "email", "password"].includes(value);
      },
    },
  },
  data() {
    return {
      errorMessage: "",
    };
  },
  computed: {
    inputType() {
      return this.type === "password" ? "password" : "text";
    },
  },
  methods: {
    async onInput(event) {
      this.$emit("update:modelValue", event.target.value);
      this.errorMessage = "";
    },
    async validate() {
      const value = this.modelValue;
      if (this.type === "username") {
        await this.validateUsername(value);
      } else if (this.type === "email") {
        this.validateEmail(value);
      } else if (this.type === "password") {
        this.validatePassword(value);
      }
    },
    async validateUsername(username) {
      if (!username) {
        this.errorMessage = "Username is required";
        return;
      }
      // Проверка логина через сервер
      try {
        const response = await fetch("");
        const result = await response.json();
        if (!result.valid) {
          this.errorMessage = "Username is already taken";
        }
      } catch (error) {
        this.errorMessage = "Error validating username";
      }
    },
    validateEmail(email) {
      const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (!email) {
        this.errorMessage = "Email is required";
      } else if (!emailPattern.test(email)) {
        this.errorMessage = "Invalid email format";
      }
    },
    validatePassword(password) {
      if (!password) {
        this.errorMessage = "Password is required";
      } else if (password.length < 6) {
        this.errorMessage = "Password must be at least 6 characters long";
      }
    },
  },
};
</script>

<style scoped>
.error-message {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}
</style>
