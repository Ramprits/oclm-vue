import { createStore } from "vuex";
import UserModule from "./modules/users/index.js";
import WorkOrderModule from "./modules/work-order/index.js";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth: UserModule,
    orders: WorkOrderModule,
  },
});
