import api from "@/axios/api";
export default {
  state: {
    userData: {
      firstName: "",
      lastName: "",
      email: "",
    },
  },
  getters: { userData: (s) => s.userData },
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
