<template>
  <SignWrapped :imgUrl="require('@/assets/images/auth/sign-in.png')">
    <template #formAuthIn>
      <FormAuthIn />
    </template>
  </SignWrapped>
</template>

<script>
import SignWrapped from "@/components/SignWrapped.vue";
import FormAuthIn from "@/components/FormAuthIn";
export default {
  components: {
    SignWrapped,
    FormAuthIn,
  },
  data() {
    return {};
  },
};
</script>
