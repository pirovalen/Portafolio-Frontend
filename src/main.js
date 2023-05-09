import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import *as bootstrap from '../node_modules/bootstrap'
import '@fortawesome/fontawesome-free/css/all.css';


// /* Bootstrap CSS , JS*/
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './scss/custom.scss'

createApp(App).use(store).use(router).use(bootstrap).mount('#app')
