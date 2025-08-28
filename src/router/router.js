import { createRouter, createWebHashHistory } from "vue-router";
import { useAuthStore } from "../stores/authStore.js";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../pages/Index.vue"),
  },
  {
    path: "/logfile",
    name: "Logfile",
    component: () => import("../pages/LogFile.vue"),
    meta: { requiresAuth: true }, // 需要登入才能訪問
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../pages/Profile.vue"),
    meta: { requiresAuth: true }, // 需要登入才能訪問
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/LoginAndResgister/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../pages/LoginAndResgister/Register.vue"),
  },
  {
    path: "/un_login_page",
    name: "UnLogin_page",
    component: () => import("../pages/Unlogin_page.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // 判斷目標頁面是否需要登入
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next("/un_login_page"); // 沒登入就跳轉到 login
  } else {
    next(); // 放行
  }
});

export default router;
