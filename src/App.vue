<template>
  <AppTheme />
  <router-view />
  <div class="d">Посмотри Роуты</div>
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
</style>
