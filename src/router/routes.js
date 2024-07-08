const routes = [
  {
    path: "/",
    name: "StartPage",
    meta: {
      titleKey: "StartPage",
      layout: "auth",
      noauth: true,
    },
    component: () => import("@/components/StartPage.vue"),
  },
  {
    path: "/signin",
    name: "SignInView",
    meta: {
      titleKey: "SignInView",
      layout: "auth",
      noauth: true,
    },
    component: () => import("@/views/SignInView.vue"),
  },
  {
    path: "/signup",
    name: "SignUpView",
    meta: {
      titleKey: "registration",
      layout: "auth",
      noauth: true,
    },
    component: () => import("@/views/SignUpView.vue"),
  },
  {
    path: "/forgot",
    name: "ResetPasswordView",
    meta: {
      titleKey: "ResetPasswordView",
      layout: "auth",
      noauth: true,
    },
    component: () => import("@/views/ResetPasswordView.vue"),
  },

  {
    path: "/verify/:resetPassword?",
    name: "CheckCode",
    meta: {
      titleKey: "CheckCode",
      layout: "auth",
      noauth: true,
      props: true,
    },
    component: () => import("@/views/CheckCode.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      titleKey: "Profile",
      layout: "auth",
      noauth: true,
      props: true,
    },
    component: () => import("@/views/ProfileView.vue"),
  },
];

export default routes;
