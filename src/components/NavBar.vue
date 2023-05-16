  <template>
    <header>
      <nav class="navbar">
        <router-link class="listNav" to="/"><img class="logo" src="../assets/Logo.png" alt="" width="100"></router-link>
        <ul class="links">
          <li><router-link class="listNav DatosInt" to="/">¿Quiénes Somos?</router-link></li>
          <li><router-link class="listNav DatosInt" to="/PlantasView">Catálogo</router-link></li>
          <li><router-link class="listNav DatosInt" to="/AdminView" v-if="loginTrue">Mantenedor</router-link></li>
          <li><router-link class="listNav DatosInt" to="/LoginView" v-if="!loginTrue">Login</router-link></li>
          <!-- <li data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><IconShoppingCart color="#fff" :size="25" stroke-width="2" /></li>  -->
          <li><button class="btn-cart" @click="toggleOffcanvas">
            <i class="bi bi-bag-fill" style="color: #888"></i>
          </button></li>
        </ul>
        <div class="toggle_btn" @click="showMenu()"><IconMenu2 color="#fff" :size="30" stroke-width="2" /></div>
      </nav>
      <div class="dropdown_menu" :class="showMobileMenu ? 'open' : ''">
        <ul class="linksDrop">
          <li><router-link class="listNav DatosInt" to="/">¿Quiénes Somos?</router-link></li>
          <li><router-link class="listNav DatosInt" to="/PlantasView">Catálogo</router-link></li>
          <li><router-link class="listNav DatosInt" to="/AdminView" v-if="loginTrue">Mantenedor</router-link></li>
          <li><router-link class="listNav DatosInt" to="/LoginView" v-if="!loginTrue">Login</router-link></li>
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
          <button type="button" v-on:click="logout" class="btn btn-si" data-bs-dismiss="modal">Si</button>
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
  };
</script>

<style scoped>
.visible {
  display: block;
}

  header{
    list-style-type: none;
    background-color: #b9c7b8;
    color: white;
    padding: .5rem 2rem;
    font-size: 16px;
    margin: 0%;
    height: 10em;
    font-family: 'Montserrat', sans-serif;
  }
  
  .toggle_btn{
    color: #C7b8c0;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
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
  .dropdown_menu{
    display: block;
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
    transition: height .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .dropdown_menu li{
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dropdown_menu.open{
    height: 240px;
  }

  .action_btn_mobile{
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .listNav {
      text-decoration: none;
      color: #ffffff;
      font-size: 1rem;
      list-style: none;
      margin-right: 70rem;
    }
  
  .listNav:hover{
    color: #333;
  }
  .linksDrop{
    list-style: none;
    padding: 0;
    margin: 0;

  } 

  .action_btn, .action_btn_mobile{
    background-color: orange;
    color: #fff;
    padding: .5rem 1rem;
    border: none;
    outline: none;
    border-radius: 20px;
    font-size: .8rem;
    font-weight: bold;
    cursor: pointer;
    transition: scale 0.2 ease;
    text-decoration: none;
    list-style: none;
  }
  
  .action_btn:hover, .action_btn_mobile:hover{
    scale: 1.05;
    color: #fff;
  }
  
  .links {
    text-decoration: none;
    color: #333;
    
  }
  .links:hover{
    color: white;
   
}
  .toggle_btn{
    display: block;
  }

@media screen and (min-width: 577px){

  .dropdown_menu{
    background: rgba(6, 14, 39, .7);;
    backdrop-filter: blur(15px);
  }
}

/* RESPONSIVE DESIGN -> Media Queries*/

  @media screen and (min-width: 768px){

    nav.navbar{
      display: flex;
      align-items: center;
      justify-content: space-around ;
      padding: 0;
    }

    .DatosInt{
      margin-right: 10em;
      font-size: 1.2em;
    }

    ul.links{
      list-style: none;
      display: flex;
      gap: 2rem;
      color: red;
      margin: 0;
    } 

    .toggle_btn{
      display: none;
    }

    .action_btn{
      display: block;
    }

    .dropdown_menu{
      display: none;
    }

  }
</style>