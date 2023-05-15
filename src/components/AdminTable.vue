<template>
  <div class="container">
    <div class="row">
      <h2 class="titulo">Mantenedor de stock</h2>
    </div>
    <div class="row justify-content-center py-5" v-if="($store.state.suculentas.length) == 0">
        <div class="col-auto">
          <fade-loader :loading="loading" :color="color" :size="size" class="mb-5"></fade-loader>
        </div>
      </div>
      <div  v-else>
        <div class="row justify-content-center py-4" id="searchContainer">
          <div id="search"  class="col-8" style="display: flex;">
            <input id="input-search" v-model="texto" @keyup="formulario" class="form-control w-100 me-2" type="text" placeholder="Ingrese su búsqueda">
            <button id="buttonSearch" class="btn btn-buscar" >
              <i class="fa fa-search"></i> Buscar
            </button>
          </div>
          <div class="col-2" style="display: flex;"> 
            <button type="button" class="btn btn-agregar" id="new" data-bs-toggle="modal" data-bs-target="#createModal" >Agregar Suculenta</button>
          </div>
        </div>
        <div class=" table-responsive contenedorTabla">
          <table class="table table-bordered table-hover align-middle">
          <thead class="table-primary">
              <tr>
                  <th scope="col" class="text-center">Categoría</th>
                  <th scope="col" class="text-center">Código</th>
                  <th scope="col" class="text-center">Nombre</th>
                  <th scope="col" class="text-center">Descripción</th>
                  <th scope="col" class="text-center">Precio</th>
                  <th scope="col" class="text-center">Stock</th>
                  <!-- <th scope="col" class="text-center">Vendido</th> -->
                  <th scope="col" class="text-center">Estado</th>
                  <th scope="col" class="text-center">Modificar</th>
                  <th scope="col" class="text-center">Eliminar</th>
              </tr>
          </thead>

        <TBody>
            <tr v-for="suculenta in suculentasFiltradas" :key="suculenta.id">
                <td  class="text-center">{{suculenta.Categoria}}</td>
                <td  class="text-center">{{suculenta.Codigo}}</td>
                <td  class="text-center">{{suculenta.Nombre}}</td>
                <td  class="text-center">{{suculenta.Descripcion}}</td>
                <td  class="text-center">{{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency' }).format(suculenta.Precio)}}</td>
                <td  class="text-center">{{suculenta.Stock}}</td>
                <td  class="text-center">{{suculenta.Estado}}</td>
                <td  class="text-center"><button class="btn btn-modificar" id="modificar" @click="getSuculenta(suculenta.id)" type="button" data-bs-toggle="modal" data-bs-target="#editModal">&#9998;</button></td>
                <td  class="text-center"><button class="btn btn-modificar" id="borrar" type="button" @click="mensajeBorraSuculenta(suculenta.id)">&#128465;</button></td>
            </tr>
        </tbody>
        </table>
      </div>
      </div>
  </div>
  
<!-- MODAL MODIFICAR ITEM-->

  <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modificar Suculenta</h1>
          <h1 class="modal-title fs-5" id="exampleModalLabel">{{  }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="form" @submit.prevent="mensajeEditarSuculenta()">
            <label for="category-obj" class="form-label">Categoría</label>
            <input type="text" class="form-control" v-model="mostrarSuculenta.Categoria">
            <label for="code-obj" class="form-label">Código</label>
            <input type="text" class="form-control" v-model="mostrarSuculenta.Codigo">
            <label for="name-obj" class="form-label">Nombre</label>
            <input type="text" class="form-control" v-model="mostrarSuculenta.Nombre">
            <label for="description-obj" class="form-label">Descripción</label>
            <input type="text" class="form-control" v-model="mostrarSuculenta.Descripcion">
            <label for="price-obj" class="form-label">Precio</label>
            <input type="number" min="1" class="form-control" v-model="mostrarSuculenta.Precio">
            <label for="stock-obj" class="form-label">Stock</label>
            <input type="number" min="0" class="form-control" v-model="mostrarSuculenta.Stock">
            <label for="state-obj" class="form-label">Estado:</label>
          <br>
          <select id="estado" name="estado" class="form-control" v-model="mostrarSuculenta.Estado">
            <option value="Activo" :selected="mostrarSuculenta.Estado === 'Activo'">Activo</option>
            <option value="Inactivo" :selected="mostrarSuculenta.Estado === 'Inactivo'">Inactivo</option>
          </select>
          <br>
            <label for="imagen-obj" class="form-label">Imagen</label>
            <input type="text" class="form-control" v-model="mostrarSuculenta.Imagen">
            <div class="modal-footer">
              <button type="button" class="btn btn-cancelar" data-bs-dismiss="modal">Cancelar</button>
              <button type="submit" class="btn btn-modificar ms-2 p-2" data-bs-dismiss="modal" >Modificar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  
<!-- MODAL AGREGAR ITEM -->

  <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Agregar Suculenta</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          
        <form class="form" @submit.prevent="confirmaAgregarSuculenta()">
          <label for="category-obj" class="form-label" >Categoría</label>
          <input type="text" class="form-control" v-model="agregarSuculenta.Categoria">
          <label for="code-obj" class="form-label">Código</label>
          <input type="text" class="form-control" v-model="agregarSuculenta.Codigo">
          <label for="name-obj" class="form-label">Nombre</label>
          <input type="text" class="form-control" v-model="agregarSuculenta.Nombre">
          <label for="description-obj" class="form-label">Descripción</label>
          <input type="text" class="form-control" v-model="agregarSuculenta.Descripcion">
          <label for="price-obj" class="form-label">Precio</label>
          <input type="number" min="1" class="form-control" v-model="agregarSuculenta.Precio">
          <label for="stock-obj" class="form-label">Stock</label>
          <input type="number" min="0" class="form-control" v-model="agregarSuculenta.Stock">
          <label for="state-obj" class="form-label">Estado:</label>
          <br>
          <select id="estado" name="estado" class="form-control" v-model="mostrarSuculenta.Estado">
            <option value="Activo" :selected="mostrarSuculenta.Estado === 'Activo'">Activo</option>
            <option value="Inactivo" :selected="mostrarSuculenta.Estado === 'Inactivo'">Inactivo</option>
          </select>
          <br>
          <label for="img-obj" class="form-label">Imagen</label>
          <input type="text" class="form-control" v-model="agregarSuculenta.Imagen">
          <div class="modal-footer">
            <button type="button" class="btn btn-cancelar " data-bs-dismiss="modal">Cancelar</button>
            <button type="submit" class="btn btn-crear ms-2 py-2" data-bs-dismiss="modal" >Agregar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>
      
<script>
import Swal from 'sweetalert2'
import {mapActions, mapState} from 'vuex';
import FadeLoader from 'vue-spinner/src/FadeLoader.vue'

export default {
  name: 'AdminTable',
  components: {
      FadeLoader
  },
  data(){
    return{  
      agregarSuculenta: {Categoria: '', Codigo: '', Nombre: '', Descripcion: '', Precio: '', Stock: '',Estado: '',  Imagen: ''},
      color: '#c7b8c0',
      texto : '',    
    }
  },
  created(){
        this.getSuculentas()
        this.getSuculenta(this.idEditar)
    },
    methods: { 
      formulario() {
        this.$store.dispatch('filtroName', this.texto);
    },
      ...mapActions(['getSuculentas', 'getSuculenta', 'crearSuculenta', 'modificarSuculenta','eliminarSuculenta', 'filtroName']),

    // SWEET ALERT AGREGAR

      confirmaAgregarSuculenta(){
        Swal.fire({
          title: '¿Estás seguro de agregar esta suculenta?',
          showCancelButton: true,
          confirmButtonText: 'Confirmar',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('¡Listo! La suculenta se ha agregado exitosamente ', '', 'success')
            this.crearSuculenta(this.agregarSuculenta)
            this.getSuculentas()
            this.resetearSuculenta(this.agregarSuculenta)
          } else if (result.isDenied) {
            Swal.fire('Los cambios no fueron guardados', '', 'info')
          }
        })
      },

      // SWEET ALERT BORRAR

      mensajeBorraSuculenta(elemento){
        Swal.fire({
          title: '¿Estás seguro de borrar esta suculenta?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#83dbaf',
          cancelButtonColor: '#8B82B7',
          confirmButtonText: 'Si, Borrar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Listo!, La suculenta ha sido borrada exitosamente.','success')
            this.idBorrarSuculenta =  elemento;
            this.eliminarSuculenta(this.idBorrarSuculenta);
            this.getSuculentas();
          }
        })
      },
      
      // SWEET ALERT EDITAR

      mensajeEditarSuculenta(){
        Swal.fire({
          title: '¿Estás seguro de los cambios realizados?',
          showCancelButton: true,
          confirmButtonText: 'Confirmar',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('¡Listo!, La suculenta ha sido modificada exitosamente ', '', 'success')
            this.getSuculentas() 
            this.modificarSuculenta(this.mostrarSuculenta)
          } else if (result.isDenied) {
            Swal.fire('Los cambios no fueron guardados', '', 'info')
          }
        })
      },

      // fUNCION PARA LIMPIAR CAMPOS FORMULARIO

      resetearSuculenta(){
        this.agregarSuculenta = {Categoria: '', Codigo: '', Nombre: '', Descripcion: '', Precio: '', Stock: '', Estado: '',  Imagen: ''}
      },
    },

    computed : {
    ...mapState(['suculentas', 'mostrarSuculenta', 'agregarSuculenta', 'suculentasFiltradas']),
    },  
  }
</script>
      
<style>

#card-img-top{
  max-width: 8rem;
  height: 60px;
}

.container{
  font-family: 'Montserrat', sans-serif;
}

.titulo{
  padding-top: 5rem;
}

.table.table-bordered{
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 5em;
}

.contenedorTabla{
  max-width: 99vw;
}

.modal-content{
  font-family: 'Montserrat', sans-serif;
}

#search{
  border-radius: 50px;
}

.btn.btn-crear,.btn.btn-modificar{
  background-color: #C7b8c0;
  color: azure;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
}

.btn.btn-crear:hover,.btn.btn-modificar:hover{
  background-color: #b9c7b8;
  color: azure;
}

.btn.btn-cancelar,.btn.btn-agregar,.btn.btn-buscar{
  background-color: #C7b8c0;
  color: azure;
  font-family: 'Montserrat', sans-serif;
}

.btn.btn-agregar{
  background-color: #C7b8c0;
  color: azure;
  font-family: 'Montserrat', sans-serif;
}

.btn.btn-cancelar:hover,.btn.btn-agregar:hover,.btn.btn-buscar:hover{
  background-color: #b9c7b8;
  color: azure;
}

.btn.btn-agregar:hover{
  background-color: #b9c7b8;
  color: azure;
}

.btn.btn-eliminar{
  background-color: #b9c7b8;
  color: azure;
}

.btn.btn-eliminar:hover{
  background-color: #b9c7b8;
  color: azure;
}
</style>