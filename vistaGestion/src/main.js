import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from 'vue'

import App from './App.vue'

import router from './routes/routes'

import axios from 'axios' 

//ruta del backend
axios.defaults.baseURL = 'http://127.0.0.1:8000'

createApp(App)
.use(router, axios)
.mount('#app')





import "bootstrap/dist/js/bootstrap.min";