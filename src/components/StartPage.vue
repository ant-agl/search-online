<template>
  <div style="font-size: 50px">Стартовая страница</div>
  <ul>
    <router-link to="/roleselection">Выбор после регисрации</router-link>
    <router-link to="/afterregistrationprofileview"
      >Заполнения Юзера после регистрации</router-link
    >
    <router-link to="/signup">Зарегистрироваться</router-link>
    <router-link to="/signin">Войти</router-link>
    <router-link to="/forgot">Восстановление пароля</router-link>
    <router-link to="/verify">Потверждение регистрации</router-link>
    <router-link to="/verify/resetpassword"
      >Потверждение восстановление пароля</router-link
    >
    <router-link to="/profile">Профиль</router-link>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
}
</style>
