<template> 
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="">
                <img src="../assets/Logo2.png" alt="" width="100"> 
            </div> 
            <!-- <div class="d-flex flex-column mx-3" v-if="(loginTrue)">
                <p class="mb-0 ms-4"> ¡Bienvenido!</p>                
                <p class="mb-0"> {{$store.state.usuarioConectado}}</p>
            </div> -->

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul id="list-contenedor" class="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                    <li class="nav-item"><router-link class="link-nav px-3" to="/" v-if="(loginTrue)">Inicio</router-link></li>
                    <li class="nav-item"><router-link class="link-nav px-3" to="/LoginView" v-if="(!loginTrue)">Productos</router-link></li>
                    <li class="nav-item"><router-link class="link-nav px-3" to="/LoginView" v-if="(!loginTrue)">Déjanos tu opinión</router-link></li>
                    <li class="nav-item"><router-link class="link-nav px-3" to="/LoginView" v-if="(!loginTrue)">Mantenedor</router-link></li>
                    <li class="nav-item"><router-link class="link-nav px-3" to="/LoginView" v-if="(!loginTrue)">Login</router-link></li>
                    
                    <li class="nav-item"><button type="button" class="btn-logout px-3" data-bs-toggle="modal" data-bs-target="#exampleModal" v-if="(loginTrue)">
                    Logout
                    </button></li>
                </ul>
            </div>
        </div> 
    </nav>

    <!-- Modal -->
    <!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
    </div> -->

        
      
</template>

<script>

// import { mapGetters, mapMutations } from 'vuex';
// import { auth } from "@/auth/auth.service";

</script>

<style>
#login{
    cursor: pointer;
}
.navbar{
    list-style-type: none;
    background-color: #73daa1;
    color: azure;
    padding: .5rem 2rem;
    font-size: 16px;
    margin: 0%;
    font-family: 'Montserrat', sans-serif;
}
.link-nav{
    text-decoration: none;
    color: azure;
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
    color: azure;
    border: none;
    transition: all 0.5s ease;
    background-color: white;
}
.btn-logout:hover{
    transform: scale(1.2);
}
.btn.btn-no{
    background-color: #73daa1;
    color: azure;
}
.btn.btn-no:hover{
    background-color: #73daa1;
    color: azure;
}
.btn.btn-si{
    background-color: white;
    color: azure;
}
.btn.btn-si:hover{
    background-color: white;
    color: azure;
}
#exampleModal{
    font-family: 'Montserrat', sans-serif;
}
</style>