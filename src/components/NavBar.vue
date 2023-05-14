<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="d-flex align-items-center">
        <div>
          <img src="../assets/Logo2.png" alt="" width="100">
        </div>

        <button class="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul id="list-contenedor" class="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
          <li class="nav-item"><router-link class="link-nav px-3" to="/">¿Quiénes somos?</router-link></li>
          <li class="nav-item"><router-link class="link-nav px-3" to="/PlantasView">Catálogo</router-link></li>
          <li class="nav-item"><router-link class="link-nav px-3" to="/AdminView" v-if="(loginTrue)">Mantenedor</router-link></li>
          <li class="nav-item"><router-link class="link-nav px-3" to="/LoginView" v-if="(!loginTrue)">Login</router-link></li>
          <li class="nav-item"><button type="button" class="btn-logout px-3" data-bs-toggle="modal" data-bs-target="#exampleModal" v-if="(loginTrue)">Logout</button></li>
        </ul>
        <button class="btn-cart" @click="toggleOffcanvas">
          <i class="bi bi-bag-fill" style="color: #888"></i>
        </button>
      </div>
    </div>
  </nav>
    

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
          <button type="button" v-on:click="logout" class="btn btn-si" data-bs-dismiss="modal">Si</button>
        </div>
      </div>
    </div>
    </div>

    <!-- OFFCANVAS -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="cartOffcanvasLabel">Carrito de compra</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <cart-offcanvas></cart-offcanvas>
    </div>
  </div>  
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { auth } from "@/auth/auth.service";

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
      navbarOpen: false,
    };
  },
  methods: {
    ...mapMutations(['cambiaEstadoLoginFalse']),
    toggleOffcanvas() {
      const offcanvas = new bootstrap.Offcanvas(document.getElementById('cartOffcanvas'));
      offcanvas.toggle();
    },
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
      if (!this.navbarOpen) {
        const navbar = document.getElementById('navbarNav');
        const bootstrapNavbar = bootstrap.Collapse.getInstance(navbar);
        if (bootstrapNavbar) {
          bootstrapNavbar.hide();
        }
      }
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
#login{
    cursor: pointer;
}
.navbar{
    list-style-type: none;
    background-color: #b9c7b8;
    color: white;
    padding: .5rem 2rem;
    font-size: 16px;
    margin: 0%;
    font-family: 'Montserrat', sans-serif;
}
.link-nav{
    text-decoration: none;
    color: #333;
    transition: all 0.5s ease;
}
.link-nav:hover{
    color: white;
    transform: scale(1.2);
}
.list-item{
    cursor: pointer;
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
#exampleModal{
    font-family: 'Montserrat', sans-serif;
}
.form-select .form-option:hover {
    outline: none;
    background-color: #b9c7b8;
}

#form-selec {
    color: #b9c7b8; 
}
/* Estilos personalizados para el botón del carrito */
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
  
  /* Estilos personalizados para el offcanvas */
  .offcanvas-body {
    padding: 1rem;
  }
</style>