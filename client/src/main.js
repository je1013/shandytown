import { createApp } from 'vue'
import App from './App.vue'
import { store } from "./store";
console.log(store.state);
createApp(App).use(store).mount("#app");
