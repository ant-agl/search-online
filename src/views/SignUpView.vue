<template>
  <SignWrapped :imgUrl="require('@/assets/images/auth/sign-up.png')">
    <template #formAuthUp>
      <FormAuthUp />
    </template>
  </SignWrapped>
</template>

<script>
import SignWrapped from "@/components/SignWrapped.vue";
import FormAuthUp from "@/components/FormAuthUp";
export default {
  components: {
    SignWrapped,
    FormAuthUp,
  },
};
</script>
