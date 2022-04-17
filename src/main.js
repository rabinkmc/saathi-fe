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
// export const api = Axios.create({
//     baseURL: 'http://localhost:8000/',
//     // headers: {
//     //  'Authorization': 'Bearer ' + localStorage.getItem('api_token')
//     // },
//     validateStatus: function (status) {
//         if (status == 401) {
//             router.push('/');
//         } else {
//             return status;
//         }
//     }
// });
Axios.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    return config;
}, (error) => {
    return Promise.reject(error);
});
app.use(store).use(router).mount('#app')
