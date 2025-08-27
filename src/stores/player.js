import { defineStore } from "pinia";
import { useAuthStore } from "./authStore";
import { getPlayer } from "../api/auth";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    player_id: "",
    player_gold: 0,
    player_item: [],
  }),

  actions: {
    async player() {
      const authstore = useAuthStore();
      try {
        const res = await getPlayer(authstore.data.username);
        this.player_id = res.player.playerid;
        this.player_gold = res.player.player_gold;
        this.player_item = res.player.player_item;
      } catch (err) {}
    },
  },
});
