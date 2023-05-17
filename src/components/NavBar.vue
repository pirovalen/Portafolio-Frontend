<template>
  <header>
    <nav class="navbar">
      <div class="navbar-logo">
        <router-link to="/"><img class="logo" src="../assets/Logo.webp" alt="" width="100"></router-link>
      </div>
      <div class="toggle_btn" @click="showMenu()">
        <IconMenu2 color="#fff" :size="30" stroke-width="2" />
      </div>
      <div class="navbar-links" :class="{ 'open': showMobileMenu }">
        <ul>
          <li><router-link class="listNav DatosInt" to="/">¿Quiénes Somos?</router-link></li>
          <li><router-link class="listNav DatosInt" to="/PlantasView">Catálogo</router-link></li>
          <li v-if="loginTrue"><router-link class="listNav DatosInt" to="/AdminView">Mantenedor</router-link></li>
          <li v-if="!loginTrue"><router-link class="listNav DatosInt" to="/LoginView">Login</router-link></li>
          <li class="nav-item"><button type="button" class="btn-logout px-3" data-bs-toggle="modal" data-bs-target="#exampleModal" v-if="(loginTrue)">Logout</button></li>
          <li><button class="btn-cart" @click="toggleOffcanvas">
            <i class="bi bi-bag-fill" style="color: #888"></i>
          </button></li>
        </ul>
      </div>
    </nav>
    <div class="dropdown_menu" :class="{ 'open': showMobileMenu }">
      <ul class="linksDrop">
        <li><router-link class="listNav DatosInt" to="/">¿Quiénes Somos?</router-link></li>
        <li><router-link class="listNav DatosInt" to="/PlantasView">Catálogo</router-link></li>
        <li v-if="loginTrue"><router-link class="listNav DatosInt" to="/AdminView">Mantenedor</router-link></li>
        <li v-if="!loginTrue"><router-link class="listNav DatosInt" to="/LoginView">Login</router-link></li>
        <li><button class="btn-cart" @click="toggleOffcanvas">
          <i class="bi bi-bag-fill" style="color: #888"></i>
        </button></li>
      </ul>
    </div>
  </header>
 


    <!-- MODAL LOGOUT -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Logout</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ¿Esta seguro que desea cerrar la sesión?
          <p>{{$store.state.usuarioConectado}}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-no" data-bs-dismiss="modal">No</button>
          <button type="button" v-on:click="logout()" class="btn btn-si" data-bs-dismiss="modal">Si</button>
        </div>
      </div>
    </div>
    </div>
  <CartOffCanvas></CartOffCanvas>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { auth } from "@/auth/auth.service";
import CartOffCanvas from './CartOffCanvas.vue'
import { IconMenu2 } from '@tabler/icons-vue';
import { IconShoppingCart } from '@tabler/icons-vue';  

export default {
  name: 'NavBar',
  computed: {
    getCartIconName() {
      return this.cantCarrito > 0 ? 'cart-outline' : 'cart';
    },
    ...mapGetters(['loginTrue']),
  },
  data() {
    return {
      // navbarOpen: false,
      showMobileMenu: false,
    };
  },
  components: {
    CartOffCanvas,
    IconMenu2,
    IconShoppingCart
    }, 

  methods: {
    ...mapMutations(['cambiaEstadoLoginFalse']),
    showMenu() {
      console.log("aveer")
      this.showMobileMenu = !this.showMobileMenu;
    },
    toggleOffcanvas() {
      const offcanvas = new bootstrap.Offcanvas(document.getElementById('cartOffcanvas'));
      offcanvas.toggle();
    },
    async logout() {
      try {
        await auth.signOut();
        this.$store.state.suculentas = [];
        this.$store.state.usuarioConectado = '';
        this.cambiaEstadoLoginFalse();
        this.$router.push('/');
      } catch (error) {
        console.log(error);
      }
    },
  },
 
  };
</script>

<style scoped>
header {
  list-style-type: none;
  background-color: #b9c7b8;
  color: white;
  padding: .5rem 2rem;
  font-size: 16px;
  margin-bottom: 5px;
  font-family: 'Montserrat', sans-serif;
}

.toggle_btn {
  color: #C7b8c0;
  font-size: 1.5rem;
  cursor: pointer;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  display: flex;
  align-items: center;
}

.navbar-logo img {
  width: 100px;
  margin-right: 1rem;
}

.navbar-links {
  display: none;
}

.navbar-links ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
}

.navbar-links li {
  position: relative;
}

.navbar-links a {
  text-decoration: none;
  color: white;
}

.navbar-links a:hover {
  color: #92868c;
}
.btn-logout{
  text-decoration: none;
  color: white;
  border: none;
  transition: all 0.5s ease;
  background-color: #b9c7b8;
}
.btn-logout:hover{
  transform: scale(1.2);
}
.btn.btn-no{
  background-color: #C7b8c0;
  color: azure;
}
.btn.btn-no:hover{
  background-color: #b9c7b8;
  color: azure;
}
.btn.btn-si{
  background-color: #C7b8c0;
  color: azure;
}
.btn.btn-si:hover{
  background-color: #b9c7b8;
  color: azure;
}
.btn-cart {
  background: none;
  border: none;
  font-size: 24px;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-cart:hover {
  transform: scale(1.2);
}
.dropdown_menu {
  display: none;
  position: absolute;
  right: 2rem;
  top: 60px;
  width: 300px;
  background: rgba(6, 14, 39, .7);
  backdrop-filter: blur(15px);
  border-radius: 10px;
  overflow: scroll;
  max-height: 240px;
  z-index: 200;
}

.dropdown_menu.open {
  display: block;
}

.dropdown_menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown_menu a {
  display: block;
  padding: 0.7rem;
  color: white;
}

.dropdown_menu a:hover {
  background-color: #333;
}

@media screen and (min-width: 768px) {
  .toggle_btn {
    display: none;
  }

  .navbar-links {
    display: flex;
  }

  .dropdown_menu {
    display: none !important;
  }
}

</style> 