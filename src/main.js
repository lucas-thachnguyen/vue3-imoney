import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
import router from "./router";
import { registerGlobalComponents } from "./utils/import.js";

const app = createApp(App);

registerGlobalComponents(app);

app.use(router);

app.mount("#app");
