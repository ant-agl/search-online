<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import AppInput from "./App/AppInput.vue";
import SelectChoice from "@/components/App/SelectChoice.vue";
import { minLength, helpers, email, required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import cities from "@/utils/cities";

const store = useStore();

const nameLocal = ref(store.getters.userData.name);
const emailLocal = ref(store.getters.userData.email);
const phoneLocal = ref(store.getters.userData.phone);
const checkboxLocal = ref(store.getters.userData.hideNumber);
const selectedOptionLocal = ref(store.getters.userData.location);
const imageUrl = ref(require("@/assets/images/user/img-02.jpg"));

const rules = computed(() => ({
  emailLocal: {
    email: helpers.withMessage("Вы ввели неверный email", email),
    required: helpers.withMessage("Email обязателен", required),
  },
  nameLocal: {
    required: helpers.withMessage("ФИО обязательны", required),
    minLength: helpers.withMessage("Введите минимум 3 символа", minLength(3)),
  },
}));

const v = useVuelidate(rules, {
  emailLocal,
  nameLocal,
});

const isFormDirty = computed(() => {
  const userData = store.getters.userData;
  const dirty =
    nameLocal.value !== userData.name ||
    emailLocal.value !== userData.email ||
    phoneLocal.value !== userData.phone ||
    checkboxLocal.value !== userData.hideNumber ||
    selectedOptionLocal.value !== userData.location;

  return dirty;
});

const onSubmit = () => {
  v.value.$touch();
  const formData = {
    name: nameLocal.value.trim(),
    email: emailLocal.value.trim(),
    phone: phoneLocal.value,
    hideNumber: checkboxLocal.value,
  };
  console.log(v.value.$pending);
  if (v.value.$pending) {
    store.commit("updateUserData", formData);
    console.log("Данные сохранены успешно:", formData);
  }
};

const onFileChange = (e) => {
  const fileType = e.target.files[0].type;
  if (["image/jpg", "image/jpeg", "image/png"].includes(fileType)) {
    const size = e.target.files[0].size;
    if (size < 2 * 1024 * 1024) {
      imageUrl.value = URL.createObjectURL(e.target.files[0]);
      // newImg.value = e.target.files[0];
    } else {
      alert("Размер файла слишком большой");
    }
  } else {
    alert("Файл не является изображением");
  }
};
</script>

<template>
  <div
    class="tab-pane fade show active"
    id="settings"
    role="tabpanel"
    aria-labelledby="settings-tab"
  >
    <form @submit.prevent="onSubmit">
      <div>
        <h5 class="fs-17 fw-semibold mb-3 mb-0">Мой профиль</h5>
        <div class="text-center">
          <div class="mb-4 profile-user">
            <img
              :src="imageUrl"
              class="rounded-circle img-thumbnail profile-img"
              id="profile-img"
              alt=""
            />
            <div class="p-0 rounded-circle profile-photo-edit">
              <input
                id="profile-img-file-input_my"
                type="file"
                class="profile-img-file-input"
                @change="onFileChange"
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
                v-model:value="v.nameLocal.$model"
                :errors="v.nameLocal.$errors"
                placeholder="Введите ФИО"
                label="ФИО"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mb-3">
              <AppInput
                v-model:value="v.emailLocal.$model"
                :errors="v.emailLocal.$errors"
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
                v-model:value="phoneLocal"
                type="tel"
                placeholder="Введите номер телефона"
                label="Телефонный номер"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mb-3">
              <SelectChoice
                label="Город"
                :options="cities"
                v-model:modelValue="selectedOptionLocal"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <AppInput
              class="form-check-input"
              type="checkbox"
              label="Скрыть номер"
              v-model:checked="checkboxLocal"
            />
          </div>
        </div>
      </div>
      <div class="mt-4 text-end">
        <input
          type="submit"
          class="btn btn-primary"
          value="Сохранить"
          :disabled="!isFormDirty"
        />
      </div>
    </form>
  </div>
</template>
