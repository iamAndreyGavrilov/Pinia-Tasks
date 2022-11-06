import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "task 1", isFav: false },
      { id: 2, title: "task 2", isFav: true },
    ],
  }),
});
