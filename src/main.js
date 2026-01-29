import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from './App.vue'
import router from './router'

const app = createApp(App)


const toastOptions = {
  position: "top-center", // center of the page
  timeout: 4000,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: false,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
};

app.use(createPinia())
app.use(Toast, toastOptions)
app.use(router)

app.mount('#app')
