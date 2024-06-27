<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import AppInput from "./App/AppInput.vue";
import useVuelidate from "@vuelidate/core";

import { minLength, helpers, email, required } from "@vuelidate/validators";
const store = useStore();
const name = ref(store.getters.userData.firstName);

const emailField = ref(store.getters.userData.email);
const phone = ref(store.getters.userData.phone);
const checkbox = ref(store.getters.userData.hideNumber);
const newImg = ref();
const imageUrl2 = ref(require("@/assets/images/user/img-02.jpg"));
const rules = computed(() => ({
  emailField: {
    email: helpers.withMessage("Вы ввели неверный email", email),
    required: helpers.withMessage("Email обязателен", required),
  },

  name: {
    required: helpers.withMessage("ФИО обязательны", required),
    minLength: helpers.withMessage("Введите минимум 3 символа", minLength(3)),
  },
}));
const v = useVuelidate(rules, {
  emailField,
  name,
});
const onSubmit = () => {
  v.value.$touch();
  console.log({
    name: name.value.trim(),

    email: emailField.value.trim(),
    phone: phone.value,
    hideNumber: checkbox.value,
    newImg: newImg.value,
  });
};
function changeImg2(event) {
  const file = event.target.files[0];
  if (file) {
    imageUrl2.value = URL.createObjectURL(file);
    newImg.value = file;
  }
}
</script>
<template>
  <div
    class="tab-pane fade show active"
    id="settings"
    role="tabpanel"
    aria-labelledby="settings-tab"
  >
    <form action="#" @submit.prevent="onSubmit">
      <div>
        <h5 class="fs-17 fw-semibold mb-3 mb-0">Мой профиль</h5>
        <div class="text-center">
          <div class="mb-4 profile-user">
            <img
              :src="imageUrl2"
              class="rounded-circle img-thumbnail profile-img"
              id="profile-img"
              alt=""
            />
            <div class="p-0 rounded-circle profile-photo-edit">
              <input
                id="profile-img-file-input_my"
                type="file"
                class="profile-img-file-input"
                @change="changeImg2"
              />
              <label
                for="profile-img-file-input_my"
                class="profile-photo-edit avatar-xs"
              >
                <i class="uil uil-edit"></i>
              </label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="mb-3">
              <AppInput
                v-model:value="v.name.$model"
                :errors="v.name.$errors"
                placeholder="Введите ФИО"
                label="ФИО"
              />
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-6">
            <div class="mb-3">
              <AppInput
                v-model:value="v.emailField.$model"
                :errors="v.emailField.$errors"
                type="email"
                placeholder="Введите электронную почту"
                label="Электронная почта"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mb-3">
              <AppInput
                v-mask="'+7 (###) ###-##-##'"
                v-model:value="phone"
                type="tel"
                placeholder="Введите номер телефона"
                label="Телефонный номер"
              />
            </div>
          </div>
          <AppInput
            class="form-check-input"
            type="checkbox"
            label="Скрыть номер"
            v-model:checked="checkbox"
          />
        </div>
        <!--end row-->
      </div>
      <!--end account-->
      <div class="mt-4 text-end">
        <input
          type="submit"
          name=""
          id=""
          class="btn btn-primary"
          value="Сохранить"
          @click="onSubmit"
        />
      </div>
    </form>
    <!--end form-->
  </div>
</template>
