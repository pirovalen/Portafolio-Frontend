<template>
  <br>
  <div class="select-container"> 
    <select class="form-select" v-model="selectSuculentas" @change="filterSuculentas" aria-label="Default select example" style="width: 250px;">
      <!-- <option value="" disabled selected hiden>Encuentra tu planta</option> -->
      <option value="" selected disabled hidden>Encuentra tu suculenta</option>
      <option class="form-option" value="Todas">Todas las suculentas</option>
      <option class="form-option" value="Aeonium">Aeoniums</option>
      <option class="form-option" value="Aloe">Aloes</option>
      <option class="form-option" value="Crassula">Crassulas</option>
      <option class="form-option" value="Echeveria">Echeverias</option>
      <option class="form-option" value="Haworthia">Haworthias</option>
      <option class="form-option" value="Sedum">Sedums</option>
    </select>
  </div>
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
        <div class="col-lg-4 mb-5 col-md-6" v-for="suculenta in $store.state.suculentas" :key="suculenta.id">
          <div class="card border mb-3 mx-auto" style="width: 18rem;">
            <img v-bind:src="suculenta.Imagen" class="card-img-top" alt="img">
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
            <button :class="suculenta.Estado === 'Activo' ? 'btnComprar' : 'btnDisabled'" :disabled="suculenta.Estado === 'Activo'">
              {{ suculenta.Estado === 'Activo' ? 'Comprar' : 'No disponible' }}
            </button>
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
        color:'#c7b8c0 ',
        selectSuculentas: ""
    }
    },

    components: {
        FadeLoader
    }, 

    created(){
        this.getSuculentas()
    },

    methods: {
        ...mapActions(['getSuculentas']),
        filterSuculentas() {
         

if (this.selectSuculentas === 'Todas') {
  this.$store.state.suculentas = this.$store.state.suculentasFiltradas;
} else {
  const searchTerm = this.selectSuculentas.toLowerCase();
  this.$store.state.suculentas = this.$store.state.suculentas.filter(element => {
    const name1 = element.Categoria.toLowerCase();
   
    return name1.includes(searchTerm) ;
  });

 }
},
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
.select-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.form-select {
  width: 600px;
  max-width: 100%;
  height: 50px;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-select .form-option:hover {
  outline: none;
  background-color: #b9c7b8;
}

#form-selec {
  color: #b9c7b8; 
}
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
  border-color: #C7b8c0;
}

.card-img-top{
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: contain;
  margin-top: 35px;
}

.card-body{
  padding-top: 7rem;
}

.btnComprar {
  background-color: #C7b8c0;
  color: white;
  border: 1px solid #C7b8c0;
  letter-spacing: 3px;
  padding: .6em 0;
}


.btnComprar:hover{
  background-color: #b9c7b8;
  border: 1px solid #b9c7b8;
} 

.btnDisabled{
  background-color: #C7b8c0;
  letter-spacing: 3px;
  color: rgb(70, 70, 70); 
  border: 1px solid #C7b8c0;
  padding: .6em 0;
}

</style>