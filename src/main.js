import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* Bootstrap CSS , JS */
import * as bootstrap from 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import './scss/custom.scss';

createApp(App)
  .use(store)
  .use(router)
  .use(bootstrap)
  .mount('#app');
