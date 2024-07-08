<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import SettingMyProfile from "@/components/SettingMyProfile.vue";
import SettingOrganization from "@/components/SettingOrganization.vue";
const store = useStore();
const switcher = ref([true, false]);

const changeSwitcher = (numberPage) => {
  let map = [];

  for (let i = 0; i < switcher.value.length; i++) {
    if (numberPage === i) {
      map[i] = true;
    } else {
      map[i] = false;
    }
  }
  switcher.value = map;
};
</script>
<style scoped>
.profile-contact li label {
  min-width: 145px !important;
}
:deep(.form-control) {
  margin-bottom: 0 !important;
}
</style>
<template>
  <div class="col-lg-4">
    <div class="card profile-sidebar me-lg-4">
      <div class="card-body p-4">
        <div class="text-center pb-4 border-bottom">
          <img
            src="@/assets/images/profile.jpg"
            alt=""
            class="avatar-lg img-thumbnail rounded-circle mb-4"
          />
          <h5 class="mb-0">
            {{ store.getters.userData.firstName }}
          </h5>
        </div>
        <!--end profile-->

        <!--end contact-details-->
      </div>
      <!--end card-body-->
    </div>
    <!--end profile-sidebar-->
  </div>
  <!--end col-->
  <div class="col-lg-8">
    <div class="card profile-content-page mt-4 mt-lg-0">
      <ul
        class="profile-content-nav nav nav-pills border-bottom mb-4"
        id="pills-tab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            :class="{ active: switcher[0] }"
            id="settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#settings"
            type="button"
            role="tab"
            aria-controls="settings"
            aria-selected="false"
            @click="changeSwitcher(0)"
          >
            Настройки профиля
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            :class="{ active: switcher[1] }"
            id="settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#settings"
            type="button"
            role="tab"
            aria-controls="settings"
            aria-selected="false"
            @click="changeSwitcher(1)"
          >
            Настройки юр.лица
          </button>
        </li>
      </ul>
      <!--end profile-content-nav-->
      <div class="card-body p-4">
        <div class="tab-content" id="pills-tabContent">
          <SettingMyProfile v-show="switcher[0]" />
          <SettingOrganization v-show="switcher[1]" />
          <!--end tab-pane-->
        </div>
        <!--end tab-content-->
      </div>
      <!--end card-body-->
    </div>
    <!--end profile-content-page-->
  </div>
  <!--end col-->
</template>
