import { ref, computed } from "vue";
import { defineStore } from "pinia";

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useCounterStore = defineStore("cnt", {
  state() {
    return {
      count: 10,
    };
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  actions: {
    increment() {
      return this.count++;
    },
  },
});
