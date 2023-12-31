import { createApp } from "vue";
import VueSweetalert2 from "vue-sweetalert2";
import "./style.css";
import "font-awesome/css/font-awesome.css";
import "sweetalert2/dist/sweetalert2.min.css";
import App from "./App.vue";

createApp(App).use(VueSweetalert2).mount("#app");
