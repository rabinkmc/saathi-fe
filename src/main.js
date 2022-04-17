import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './tailwind.css'
import './assets/tailwind.css'
import Axios from "axios";


Axios.defaults.baseURL = 'http://localhost:8000/';

const app = createApp(App)
app.config.globalProperties.$http = Axios;

Axios.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    return config;
}, (error) => {
    return Promise.reject(error);
});

app.use(store).use(router).mount('#app')
