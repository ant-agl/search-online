import api from "@/axios/api";

export default {
  state: {
    userData: {
      name: "Джеки Чан",
      email: "Djeki@mail.ru",
      phone: "+7 (938) 526-97-83",
      location: "",
      hideNumber: false,
      img: require("@/assets/images/user/nofoto.png"),
    },
    userOrganization: {
      name: "Night City",
      address: " Rublevka",
      location: 1,
      inn: "213-123-123 55",
      email: "Night@mail.ru",
      phone: "+7 (938) 526-97-83",
      about: "It is Cool company",
      category: "",
      img: require("@/assets/images/user/nofoto.png"),
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
    updateUserImg(state, payload) {
      console.log(payload);
      state.userData.img = payload;
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
          localStorage.setItem("token", response.data.token);
          console.log("login", response);
          return response;
        })
        .catch((error) => {
          console.log("login error", error);

          return Promise.reject(error);
        });
    },
    async searchCity(context, data) {
      return api
        .post("/city/search", data)
        .then((response) => {
          console.log("city", response);
          return response;
        })
        .catch((error) => {
          console.log("serach city  error", error);

          return Promise.reject(error);
        });
    },
    async getCity(context, data) {
      return api
        .post("/city/get", data)
        .then((response) => {
          console.log("get city", response);
          return response;
        })
        .catch((error) => {
          console.log("get city  error", error);

          return Promise.reject(error);
        });
    },
  },
  modules: {},
};
