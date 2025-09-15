import { defineStore } from "pinia";
import { useAuthStore } from "./authStore";
import { getPlayer } from "../api/auth";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    data: {},
  }),

  actions: {
    async player() {
      const authstore = useAuthStore();
      const username = authstore.data.username;
      try {
        const res = await getPlayer({ username });
        this.data = res.data;
      } catch (err) {
        console.error(err);
      }
    },
  },
});
