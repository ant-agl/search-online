import api from "@/axios/api";
export default {
  state: {
    userData: {
      firstName: "Джеки Чан",
      email: "Djeki@mail.ru",
      phone: "+79385269783",
      location: "Tenruk",
      hideNumber: false,
      img: "",
    },
    userOrganization: {
      name: "Night City",
      address: " Rublevka",
      location: 1,
      index: "3504043",
      inn: "213-123-123 55",
      email: "Night@mail.ru",
      phone: "+79993450565",
      about: "It is Cool company",
      category: "",
      img: "",
    },
  },
  getters: {
    userData: (s) => s.userData,
    userOrganization: (s) => s.userOrganization,
  },
  mutations: {},
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
