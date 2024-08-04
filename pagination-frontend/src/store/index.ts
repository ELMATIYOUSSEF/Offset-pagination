import { defineStore } from "pinia";
import axios from "axios";

export const useItemsStore = defineStore("items", {
  state: () => ({
    items: [],
    total: 0,
    page: 1,
    limit: 10,
  }),
  actions: {
    async fetchItems() {
      const response = await axios.get(
        `http://localhost:3000/items?page=${this.page}&limit=${this.limit}`
      );
      this.items = response.data.data;
      this.total = response.data.total;
    },
    setPage(page: number) {
      this.page = page;
      this.fetchItems();
    },
  },
});
