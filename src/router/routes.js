const routes = [
  {
    path: "/SignInView",
    name: "SignInView",
    meta: {
      titleKey: "SignInView",
      layout: "auth",
      noauth: true,
    },
    component: () => import("@/views/SignInView.vue"),
  },
  {
    path: "/SignUpView",
    name: "SignUpView",
    meta: {
      titleKey: "registration",
      layout: "auth",
      noauth: true,
    },
    component: () => import("@/views/SignUpView.vue"),
  },
  {
    path: "/ResetPasswordView",
    name: "ResetPasswordView",
    meta: {
      titleKey: "ResetPasswordView",
      layout: "auth",
      noauth: true,
    },
    component: () => import("@/views/ResetPasswordView.vue"),
  },

  {
    path: "/CheckCode/:resetPassword?",
    name: "CheckCode",
    meta: {
      titleKey: "CheckCode",
      layout: "auth",
      noauth: true,
      props: true,
    },
    component: () => import("@/views/CheckCode.vue"),
  },
];

export default routes;
