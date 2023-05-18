import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import footer from './components/Footer.vue'

/* Bootstrap CSS , JS */
import * as bootstrap from 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import './scss/custom.scss';

const app=createApp(App);
app.component('Footer', footer )
app
  .use(store)
  .use(router)
  .use(bootstrap)
  .mount('#app');
  
