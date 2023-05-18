<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="cartOffcanvasLabel">Carro de Compra</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <table class="table table-bordered">
        <thead class="table-success">
          <tr class="align-items-center">
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio Unitario</th>
            <th scope="col">Modificar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="producto in carrito" :key="producto.Cantidad">
            <td>{{ producto.Nombre }}</td>
            <td class="cantidad">
              <div class="suma">{{ producto.Cantidad }}</div>
              <ion-icon name="add" @click="agregar(producto)"></ion-icon>
              <ion-icon name="remove" @click="restar(producto)"></ion-icon>
            </td>
            <td>${{ new Intl.NumberFormat('ES', { style: 'currency', currency: 'clp' }).format(producto.Precio) }}</td>
            <td><ion-icon name="trash-outline" @click="eliminar(producto)"></ion-icon></td>
          </tr>
        </tbody>
      </table>
      <div class="summary">
        <p>Total: $ {{ new Intl.NumberFormat('ES', { style: 'currency', currency: 'clp' }).format(valores) }}</p>
      </div>
      <div class="modal-footer d-grid gap-2 justify-content-center text-center"> 
        <button class="btn btn-custom" type="button" @click="limpiarCarro(carrito)">Limpiar mi Carrito</button>
        <button class="btn btn-custom" type="button" data-bs-toggle="modal" data-bs-target="#finalizarModal">Finalizar mi compra</button>
      </div>
    </div>
  </div>
  <div class="modal fade" id="finalizarModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Resumen de tu compra</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <table class="table table-bordered">
            <thead class="table-success">
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio Unitario</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="producto in carrito" :key="producto.Codigo">
                <td>{{ producto.Nombre }}</td>
                <td class="cantidad">
                  <div class="suma">{{ producto.Cantidad }}</div>
                </td>
                <td>${{ new Intl.NumberFormat('ES', { style: 'currency', currency: 'clp' }).format(producto.Precio) }}</td>
              </tr>
              <div class="summary m-3">
                <p>Total compra: $ {{ new Intl.NumberFormat('ES', { style: 'currency', currency: 'clp' }).format(valores) }}</p>
              </div>
            </tbody>
          </table>
        </div>
        <div class="modal-footer d-flex align-items-center">
          <input id="mandaEmail" type="email" v-model="mandaEmail" placeholder="Ingresa tu correo electrónico" style="border: 2px solid #C7b8c0; padding: 5px; border-radius: 5px; outline: none;">
          <button type="button" class="btn btn-custom d-inline-block" data-bs-dismiss="modal" @click="finalizarCompra(producto)">Aceptar</button>
        </div>
      </div> 
    </div>
  </div>
</template>

<script >

import {mapState, mapMutations} from 'vuex'
import emailjs from '@emailjs/browser';


export default {
    name:'App',
data(){
    return{
        productos: [],
        mandaEmail: "",
    };
},

computed: {
    ...mapState(['carrito','valores']),
  },

methods: {
    ...mapMutations(['agregar','restar','eliminar','limpiarCarro' ]),

    finalizarCompra(producto) {
  const self = this;
  let mensaje = "";
  let totalCompra = 0;

  for (const producto of this.carrito) {
    const precioUnitario = new Intl.NumberFormat('ES', { style: 'currency', currency: 'clp' }).format(producto.Precio);
    const precioTotal = new Intl.NumberFormat('ES', { style: 'currency', currency: 'clp' }).format(producto.Precio * producto.Cantidad);

    mensaje += `Producto: ${producto.Nombre}\nCantidad: ${producto.Cantidad}\nPrecio unitario: ${precioUnitario}\nPrecio total: ${precioTotal}\n\n`;

    totalCompra += producto.Precio * producto.Cantidad;
  }

  mensaje += `Total compra: ${new Intl.NumberFormat('ES', { style: 'currency', currency: 'clp' }).format(totalCompra)}`;

  emailjs.send("service_t57bfkg", "template_l6xng72", {
    to_name: self.nombre,
    from_name: 'Suculentas',
    message: mensaje,
    mail: self.mandaEmail,
  }, "1NQ4h1XTEAjRRJwlY")
    .then(() => {
      alert('Correo Enviado, revisa tu bandeja de entrada');
    }, (err) => {
      alert(JSON.stringify(err));
    });
}

}

}

</script>

<style scoped>
.btn-custom {
    margin-top: .5em;
    padding: 10px 20px;
    background-color: #b9c7b8;
    border: none;
    color: #ffffff;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    width: 15em;
    letter-spacing: 2px;
  }
    
  .btn-custom:hover {
    background-color: #C7b8c0;
  }
.cantidad {
  display: flex;
}
.controlador {
  width: 70px;
  margin-left: 15px;
  margin-right: 15px;
}
.suma {
  margin-left: 10px;
  margin-right: 10px;
}
</style>