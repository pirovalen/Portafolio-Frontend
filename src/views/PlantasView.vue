<template>
    <div>
      <div class="titulo">
        <h2>La mejor selección de suculentas del Litoral Central</h2>
      </div>
      <div class="subtitulo py-3">
        <p>Revisa nuestro catálogo online</p>
      </div>
      <div class="container mt-5">
        <div class="row justify-content-center py-5" v-if="$store.state.suculentas.length === 0">
          <div class="col-auto">
            <fade-loader :loading="loading" :color="color" :size="size" class="mb-5"></fade-loader>
          </div>
        </div>
        <div class="row" v-else>
          <div class="col-lg-4 mb-5 col-md-6" v-for="suculenta in $store.state.suculentas" :key="suculenta.Id">
            <div class="card border mb-3 mx-auto" style="width: 18rem;">
              <!-- <img :src="suculenta.Imagen" class="card-img-top card-img-custom" alt="..."> -->
              <div class="card-body">
                <h5 class="card-title text-center">{{ suculenta.Categoria }}</h5>
                <p class="card-text text-center">SKU: {{ suculenta.Codigo }}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Descripción: {{ suculenta.Descripcion }}</li>
                <li class="list-group-item">Estado: {{ suculenta.Estado }}</li>
                <li class="list-group-item">Nombre: {{ suculenta.Nombre }}</li>
                <li class="list-group-item">Precio: {{ new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'  }).format(suculenta.Precio) }}</li>
              </ul>
              <button :class="suculenta.estado === 'true' ? 'btnInscribir' : 'btnDisabled'" :disabled="suculenta.estado === 'false'">
                {{ suculenta.estado === 'true' ? 'Comprar' : 'No disponible' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
    
    <script>
    import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
    import {mapActions, mapState} from 'vuex' 

    export default {
        name: "Home-View",
        data() {
            return {
            color:'#c7b8c0 '
        }
        },

        components: {
            FadeLoader
        }, 

        created(){
            this.getSuculentas()
        },

        methods: {
            ...mapActions(['getSuculentas'])
        },

        computed : {
            ...mapState(['suculentas'])
        },

        showAlert(texto1, texto2){
            Swal.fire({
                title:texto1,
                text: texto2,
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        },

        async mounted(){
            this.$store.state.suculentas=[]
            if(this.$store.state.usuarioConectado===''){    
                this.showAlert('No hay usuario conectado', 'Debe loguearse')
                this.$router.push('/login')
            }
        }
    }
    
    </script>
    
    <style>
        .titulo{
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        }

        .subtitulo{
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        padding-inline: 1rem;
        }

        .card {
            font-family: 'Montserrat', sans-serif;
            border-color: #D2AFFF;
        }

        .card-img-top{
        max-width: 8rem;
        height: 160px;
        align-self: center;
        padding-top: 2rem;
        }

        .card-body{
        padding-top: 7rem;
        }

        .btnInscribir {
            background-color: #8B82B7;
            color: white;
            border: 1px solid #8B82B7;

            letter-spacing: 3px;
            padding: .6em 0;
        }


         .btnInscribir:hover{
            background-color: #F2B119;
        } 

        .btnDisabled{
            background-color: #dadada;
            letter-spacing: 3px;
            color: rgb(70, 70, 70); 
            border: 1px solid #D2AFFF;
            padding: .6em 0;
        }

    </style>