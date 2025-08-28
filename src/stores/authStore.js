import { defineStore } from "pinia";
import { register, login, logout, profile } from "../api/auth";
import Router from "../router/router";

const registerUser = register;
const loginUser = login;
const router = Router;

export const useAuthStore = defineStore("auth", {
  state: () => ({
    data: {},
    playerData: {},
    isLoggedIn: true,
  }),

  actions: {
    async register(payload) {
      try {
        const res = await registerUser(payload);
        console.log(res.message);
        router.push({ name: "Login" });
      } catch (err) {
        if (err.response) {
          // 後端回傳的狀態碼 & 訊息
          console.log("Message:", err.response.data.message);
          alert(err.response.data.message);
        } else {
          console.error("Network or other error:", err);
        }
      }
    },

    async login(payload) {
      try {
        const res = await loginUser(payload);
        this.data = res.data;
        this.isLoggedIn = true;
        router.push({ name: "Index" });
      } catch (err) {
        if (err.response) {
          // 後端回傳的狀態碼 & 訊息
          console.log("Message:", err.response.data.message);
          alert(err.response.data.message);
        } else {
          console.error("Network or other error:", err);
        }
      }
    },

    async logout() {
      this.data = {};
      this.isLoggedIn = false;
      router.push({ name: "UnLogin_page" });
      await logout();
    },

    async profile() {
      try {
        const res = await profile();
        this.playerData = res.data;
      } catch (err) {
        if (err.response) {
          // 後端回傳的狀態碼 & 訊息
          console.log("Message:", err.response.data.message);
          alert(err.response.data.message);
        } else {
          console.error("Network or other error:", err);
        }
      }
    },
  },
});
