<template>
  <AppTheme />
  <router-view />
</template>

<script>
import AppTheme from "@/components/App/AppTheme.vue";
export default {
  components: {
    AppTheme,
  },
};
</script>
<style lang="scss">
.d {
  font-size: 60px;
}
body {
  background-color: white !important;
}
</style>
