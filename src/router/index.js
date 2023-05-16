import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'
import PlantasView from '../views/PlantasView.vue'
import OtherPlants from '../views/OtherPlants.vue'
import NotFound from '../views/NotFound.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/LoginView',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/AdminView',
    name: 'AdminView',
    component: AdminView
  },
  {
    path: '/OtherPlants',
    name: 'OtherPlants',
    component: OtherPlants
  },
  {
    path: '/PlantasView',
    name: 'PlantasView',
    component: PlantasView
  },
  { path: '/:catchAll(.*)', component: NotFound }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
