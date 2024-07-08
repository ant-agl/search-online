import api from "@/axios/api";
export default {
  state: {
    userData: {
      name: "Джеки Чан",
      email: "Djeki@mail.ru",
      phone: "+7 (938) 526-97-83",
      location: 1,
      hideNumber: false,
      img: "",
    },
    userOrganization: {
      name: "Night City",
      address: " Rublevka",
      location: 1,
      index: "3504043",
      inn: "213123123 55",
      email: "Night@mail.ru",
      phone: "+7 (938) 526-97-83",
      about: "It is Cool company",
      category: "",
      img: "",
    },
  },
  getters: {
    userData: (s) => s.userData,
    userOrganization: (s) => s.userOrganization,
  },
  mutations: {
    updateUserData(state, payload) {
      state.userData = { ...state.userData, ...payload };
    },
  },
  actions: {
    async registrationUserData(context, data) {
      console.log(data);
      return api
        .post("/registration", data)
        .then((response) => {
          console.log("registration", response);
          return response;
        })
        .catch((error) => {
          console.log("registration_user error", error);

          return Promise.reject(error);
        });
    },
    async authActivate(context, data) {
      console.log(data);
      return api
        .post("/registration/activate", data)
        .then((response) => {
          console.log("activate", response);
          return response;
        })
        .catch((error) => {
          console.log("activate_user error", error);

          return Promise.reject(error);
        });
    },
    async userResetPassword(context, data) {
      console.log(data);
      return api
        .post("/registration/recover_password_query", data)
        .then((response) => {
          console.log("recover_password", response);
          return response;
        })
        .catch((error) => {
          console.log("recover_password error", error);

          return Promise.reject(error);
        });
    },
    async userRecoverPassword(context, data) {
      console.log(data);
      return api
        .post("/registration/recover_password", data)
        .then((response) => {
          console.log("recover_password", response);
          return response;
        })
        .catch((error) => {
          console.log("recover_password error", error);

          return Promise.reject(error);
        });
    },
    async login(context, data) {
      console.log(data);
      return api
        .post("/login", data)
        .then((response) => {
          console.log("login", response);
          return response;
        })
        .catch((error) => {
          console.log("login error", error);

          return Promise.reject(error);
        });
    },
  },
  modules: {},
};
