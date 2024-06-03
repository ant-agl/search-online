<template>
  <TransitionGroup name="error">
    <div class="badge bg-danger"><slot></slot></div>
  </TransitionGroup>
</template>

<style scoped>
div {
  display: block;
  margin-top: 5px;
}
.error-enter-active,
.error-leave-active {
  transition: all 0.5s ease;
}
.error-enter-from,
.error-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
