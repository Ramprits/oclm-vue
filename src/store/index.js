import { createStore } from "vuex";
import UserModule from "./modules/users/index.js";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth: UserModule,
  },
});
