import { createRouter, createWebHashHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Layout from "@/components/Layout.vue";
import Register from "@/views/Register.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/",
    redirect: "/login",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Home,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(to);
  next();
  // to and from are both route objects. must call `next`.
});

export default router;
