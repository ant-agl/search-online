<template>
  <div style="font-size: 50px">Стартовая страница</div>
  <ul>
    <router-link to="/SignUpView">Зарегистрироваться</router-link>
    <router-link to="/SignInView">Войти</router-link>
    <router-link to="/ResetPasswordView">Восстановление пароля</router-link>
    <router-link to="/CheckCode">Потверждение регистрации</router-link>
    <router-link to="/CheckCode/resetPassword=true"
      >Потверждение восстановление пароля</router-link
    >
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
}
</style>
