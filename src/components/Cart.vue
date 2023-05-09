<template>
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Mi Carrito</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <table class="table table-bordered">
                <thead class=" table-success">
                <tr class="align-items-center">
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio Unitario</th>
                    <th scope="col">Modificar</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="carro in carrito" :key="carro.cantidad">
                        <td>{{carro.nombre}}</td>
                        <td class="cantidad">
                            <div class="suma">{{carro.cantidad}}</div>

                            <font-awesome-icon :icon="['fas', 'arrow-up']" @click="agregar(carro)" class="me-2" style="color: #19b81c;"/>
                            <font-awesome-icon :icon="['fas', 'arrow-down']" @click="restar(carro)" style="color: #c93c2c;"/>
                         

                        </td>
                        <td>${{new Intl.NumberFormat('ES', {style: 'currency', currency: 'clp' }).format(carro.precio)}}</td>
                        <td><ion-icon name="trash-outline"  @click="eliminar(carro)"></ion-icon></td>
                    </tr>
                </tbody>
                </table>
                <div class="summary">
                    <p>Total: $ {{new Intl.NumberFormat('ES', {style: 'currency', currency: 'clp' }).format(valores)}}</p>
                </div>
                <div class="d-grid gap-2 col-10 mx-auto">
                    <button class="btn btn-outline-success" type="button" @click="limpiarCarro(carrito)">Limpiar mi Carrito</button>
                    <button class="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#finalizarModal">Finalizar mi compra</button>
                </div>
      </div>
    </div>

    <div class="modal fade" id="finalizarModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel"> Resumen de tu compra</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table class="table table-bordered">
                        <thead class=" table-success">
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio Unitario</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="carro in carrito" :key="carro.cantidad">
                                <td>{{carro.nombre}}</td>
                                <td class="cantidad">
                                    <div class="suma">{{carro.cantidad}}</div>

                                </td>
                                
                                <td>$ {{new Intl.NumberFormat('ES', {style: 'currency', currency: 'clp' }).format(carro.precio)}}</td>
                            </tr>
                            <div class="summary m-3">
                                <p>Total compra: $ {{new Intl.NumberFormat('ES', {style: 'currency', currency: 'clp' }).format(valores)}}</p>
                            </div>
                        </tbody>
                        </table>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-success" data-bs-dismiss="modal">
                    <router-link to="/" class="nav-link active" @click="cierreSesion">Aceptar</router-link>
                  </button>
                </div>
              </div>
            </div>
        </div>
</template>


<script >

import {mapState, mapMutations} from 'vuex'


export default {
    name:'App',
data(){
    return{
        productos: [],
    //     carrito:  [
    //         {nombre: "silla", valor: "1233", precio: "qwe"},
    //         {nombre: "silla", valor: "1233", precio: "qwe"},
    //         {nombre: "silla", valor: "1233", precio: "qwe"}
    // ]
    };
},

computed: {
    ...mapState(['carrito']),
    ...mapState(['valores'])    
  },

methods: {
    ...mapMutations(['agregar']),
    ...mapMutations(['restar']),
    ...mapMutations(['eliminar']),
    ...mapMutations(['limpiarCarro'])
}


}

</script>
<style scoped>
.cantidad {
    display: flex;
}
.controlador{
    width: 70px;
    margin-left: 15px;
    margin-right: 15px;
}
.suma{
    margin-left: 10px;
    margin-right: 10px;
}
</style>
