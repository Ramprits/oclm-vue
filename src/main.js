import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL;
axios.interceptors.request.use(function(config) {
  let publicUrl = ["/auth/local", "/auth/local/register"];
  if (!publicUrl.includes(config.url)) {
    const token = store.getters["auth/token"];
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.defaults.headers.post["Content-Type"] = "application/json";
createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
