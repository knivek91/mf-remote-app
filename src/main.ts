import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
// @ts-expect-error
import App from "./App.vue";

createApp(App).use(vuetify).mount("#app");
