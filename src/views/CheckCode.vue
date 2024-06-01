<template>
  <SignWrapped :imgUrl="require('@/assets/images/auth/reset-password.png')">
    <template #formaUser>
      <FormEnterCode />
    </template>
  </SignWrapped>
</template>

<script>
import SignWrapped from "@/components/SignWrapped.vue";
import FormEnterCode from "@/components/FormEnterCode.vue";
export default {
  components: {
    SignWrapped,
    FormEnterCode,
  },
  data() {
    return {};
  },
};
</script>
