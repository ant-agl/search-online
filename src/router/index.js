import { createRouter, createWebHistory } from "vue-router";
import SignUpView from "@/views/SignUpView.vue";
import SignInView from "@/views/SignInView.vue";

const routes = [
  {
    path: "/",
    name: "SignInView",
    component: SignInView,
  },

  {
    path: "/signUp",
    name: "SignUpView",
    component: SignUpView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
