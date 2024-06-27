import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VMask from "@ssibrahimbas/v-mask";

createApp(App).use(store).use(router).use(VMask).mount("#app");
