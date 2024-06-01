<template>
  <SignWrapped :imgUrl="require('@/assets/images/auth/reset-password.png')">
    <template #formaUser>
      <FormResetPassword />
    </template>
  </SignWrapped>
</template>

<script>
import SignWrapped from "@/components/SignWrapped.vue";
import FormResetPassword from "@/components/FormResetPassword.vue";
export default {
  components: {
    SignWrapped,
    FormResetPassword,
  },
  data() {
    return {};
  },
};
</script>
