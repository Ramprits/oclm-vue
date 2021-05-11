import { createRouter, createWebHashHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Layout from "@/components/Layout.vue";
import Register from "@/views/Register.vue";
import store from "../store/index.js";

const routes = [
    {
        path: "/login",
        name: "Login",
        meta: { requiresUnAuth: true },
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        meta: { requiresUnAuth: true },
        component: Register
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
                meta: { requiresAuth: true },
                component: Home
            },
            {
                path: "/work-orders",
                name: "WorkOrder",
                meta: { requiresAuth: true },
                component: () =>
                    import(
                        /* webpackChunkName: "work-orders" */ "@/views/WorkOrder.vue"
                    )
            },
            {
                path: "/field-agent",
                name: "FieldAgent",
                meta: { requiresAuth: true },
                component: () =>
                    import(
                        /* webpackChunkName: "field-agent" */ "@/views/FieldAgent.vue"
                    )
            },
            {
                path: "/report",
                name: "Report",
                meta: { requiresAuth: true },
                component: () =>
                    import(
                        /* webpackChunkName: "report" */ "@/views/Report.vue"
                    )
            },
            {
                path: "/profile",
                name: "Profile",
                meta: { requiresAuth: true },
                component: () =>
                    import(
                        /* webpackChunkName: "profile" */ "@/views/Profile.vue"
                    )
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, _, next) => {
    let authenticated = store.getters["auth/isAuthenticated"];
    if (to.meta.requiresAuth && !authenticated) {
        next({ name: "Login" });
    }
    if (to.meta.requiresUnAuth && authenticated) {
        next({ name: "Dashboard" });
    } else {
        next();
    }
});

export default router;
