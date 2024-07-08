<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import SelectChoice from "@/components/App/SelectChoice.vue";
import useVuelidate from "@vuelidate/core";
import AppInput from "@/components/App/AppInput";
import { minLength, helpers, email } from "@vuelidate/validators";
const store = useStore();
const name = ref(store.getters.userOrganization.name);
const address = ref(store.getters.userOrganization.address);
const selectedOption = ref(store.getters.userOrganization.location);
const index = ref(store.getters.userOrganization.index);
const inn = ref(store.getters.userOrganization.inn);
const emailField = ref(store.getters.userOrganization.email);
const phone = ref(store.getters.userOrganization.phone);
const about = ref(store.getters.userOrganization.about);
const imageUrl = ref(require("@/assets/images/user/img-02.jpg"));
const newImg = ref();
const options = ref([
  { id: 1, name: "Москва" },
  { id: 2, name: "Питер" },
  { id: 3, name: "Екатеренбург" },
  { id: 4, name: "Краснодар" },
  { id: 5, name: "Ростов" },
]);

const rules = computed(() => ({
  emailField: {
    email: helpers.withMessage("Вы ввели неверный email", email),
  },
  index: {
    minLength: helpers.withMessage(
      "Индекс состоит из 6 символов",
      minLength(6)
    ),
  },
  inn: {
    minLength: helpers.withMessage("ИНН состоит из 11 символов", minLength(14)),
  },
  name: {
    minLength: helpers.withMessage("Введите минимум 3 символа", minLength(3)),
  },
}));
const v = useVuelidate(rules, {
  emailField,
  index,
  inn,
  name,
});
const onSubmit = () => {
  v.value.$touch();
  console.log({
    name: name.value.trim(),
    address: address.value.trim(),
    selectedOption: selectedOption.value,
    index: index.value,
    inn: inn.value,
    email: emailField.value.trim(),
    phone: phone.value,
    about: about.value.trim(),
    newImg: newImg.value,
  });
};
function onFileChange(e) {
  const fileType = e.target.files[0].type; // Получение типа файла
  if (
    ["image/jpg", "image/jpeg", "image/png", "image/gif"].includes(fileType)
  ) {
    // Проверка формата файла
    const size = e.target.files[0].size; // Получение размера файла
    // Проверка размера файла
    if (size < 2 * 1024 * 1024) {
      // Размер файла меньше 2 МБ
      imageUrl.value = URL.createObjectURL(e.target.files[0]);
      newImg.value = e.target.files[0];
    } else {
      alert("Размер файла слишком большой");
    }
  } else {
    alert("Файл не является изображением");
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
        <h5 class="fs-17 fw-semibold mb-3 mb-0">Моя организация</h5>
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
                id="profile-img-file-input"
                type="file"
                class="profile-img-file-input"
                @change="onFileChange"
              />
              <label
                for="profile-img-file-input"
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
                placeholder="Введите название организации"
                label="Название организации"
              />
            </div>
          </div>

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
          <div class="col-lg-6">
            <div class="mb-3">
              <SelectChoice
                label="Город"
                :options="options"
                v-model:modelValue="selectedOption"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mb-3">
              <AppInput
                v-model:value="address"
                placeholder="Введите адресс"
                label="Адрес"
              />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <AppInput
                v-model:value="v.index.$model"
                v-mask="'######'"
                :errors="v.index.$errors"
                placeholder="Введите индекс"
                label="Индекс"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mb-3">
              <AppInput
                v-model:value="v.inn.$model"
                v-mask="'###-###-### ##'"
                :errors="v.inn.$errors"
                placeholder="Введите ИНН"
                label="ИНН"
              />
            </div>
          </div>
        </div>
        <div class="mt-4">
          <h5 class="fs-17 fw-semibold mb-3">Об организации</h5>
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label for="about" class="form-label"
                  >Представьте вашу организацию</label
                >
                <textarea
                  v-model="about"
                  class="form-control"
                  id="about"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
          <!--end row-->
        </div>
      </div>
      <!--end row-->

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
