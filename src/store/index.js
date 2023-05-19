import { createStore } from 'vuex';
import { collection, getDocs, doc, getDoc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from "@/auth/auth.service";


export const SET_LOGIN_STATE = 'SET_LOGIN_STATE';

export default createStore({
  state: {
    suculentas: [],
    mostrarSuculenta: { Categoria: '', Codigo: '', Nombre: '', Descripcion: '', Precio: '', Stock: '', Estado: '', Imagen: '' },
    login: false,
    usuarioConectado: "",
    carga: false,
    suculentasFiltradas: [],
    carrito: JSON.parse(localStorage.getItem('carrito')) ? JSON.parse(localStorage.getItem('carrito')) : [],
    valores: JSON.parse(localStorage.getItem('valores')) ? JSON.parse(localStorage.getItem('valores')) : 0,
    cantCarrito: JSON.parse(localStorage.getItem('cantCarrito')) ? JSON.parse(localStorage.getItem('cantCarrito'))   : 0,
    precioTotal: JSON.parse(localStorage.getItem('precioTotal')) ? JSON.parse(localStorage.getItem('precioTotal')) : [],
  },

  getters: {
    loginTrue(state) {
      return state.login;
    },
    totalCarrito(state) {
      return state.carrito.reduce((total, producto) => total + producto.Precio * producto.Cantidad, 0);
    }
  },

  mutations: {
    [SET_LOGIN_STATE](state, payload) {
      state.login = payload;
    },
    getSuculentas(state, payload) {
      state.suculentas = payload;
      state.suculentasFiltradas = payload;
    },

    getSuculenta(state, payload) {
      state.mostrarSuculenta = payload;
    },

    getMostrarSuculenta(state, payload) {
      state.mostrarSuculenta = payload;
    },
    cambiaEstadoLogin(state) {
      state.login = true;
    },
    cambiaEstadoLoginFalse(state) {
      state.login = false;
    },
    getSuculentasFiltradas(state, payload) {
      state.suculentasFiltradas = payload;
    },
 
    agregar(state, payload){
      console.log(state.carrito)
      const yaExiste = state.carrito.some((element) => { 
          return payload.id === element.id
      })
      
      if(yaExiste){
          payload.Cantidad = payload.Cantidad + 1 
          // state.valores = state.valores+(payload.Precio * payload.Cantidad) 
      }else{
          state.carrito.push(payload)
          payload.Cantidad = 1  
          // state.carrito = JSON.parse(localStorage.getItem('carrito')), 
      }
      payload.totalPrecio = payload.Precio * payload.Cantidad
      state.valores = state.valores+(payload.Precio) 
      state.cantCarrito = state.carrito.length; 
      // localStorage.setItem('cantidad', JSON.stringify(payload.Cantidad))
      localStorage.setItem('carrito', JSON.stringify(state.carrito))
      localStorage.setItem('valores', JSON.stringify(state.valores))
      localStorage.setItem('precioTotal', JSON.stringify(state.precioTotal))
      localStorage.setItem('cantCarrito', JSON.stringify(state.carrito.length))
  },
  restar(state, payload){

    if(payload.Cantidad == 1){
        state.valores = state.valores - (payload.Precio)
        state.carrito = state.carrito.filter((element)=>{
        return element.id != payload.id;
        })
        payload.Cantidad = 0
    }
    else if(payload.Cantidad > 1){
        payload.Cantidad = payload.Cantidad - 1
        state.valores = state.valores-(payload.Precio)
    }
      payload.totalPrecio = payload.Precio * payload.Cantidad
       
      state.cantCarrito = state.carrito.length; 
      // localStorage.setItem('cantidad', JSON.stringify(payload.Cantidad))
      localStorage.setItem('carrito', JSON.stringify(state.carrito))
      localStorage.setItem('valores', JSON.stringify(state.valores))
      localStorage.setItem('precioTotal', JSON.stringify(state.precioTotal))
      localStorage.setItem('cantCarrito', JSON.stringify(state.carrito.length))
},

eliminar(state, payload){
    state.carrito = state.carrito.filter((element)=>{
        return element.id != payload.id;
    })
    state.valores = state.valores - (payload.Precio * payload.Cantidad)
    payload.Cantidad = 1

    state.cantCarrito = state.carrito.length;
    localStorage.setItem('carrito', JSON.stringify(state.carrito))
    localStorage.setItem('valores', JSON.stringify(state.valores))
    localStorage.setItem('cantCarrito', JSON.stringify(state.carrito.length))
},

limpiarCarro(state,payload){
    state.carrito = [];
    state.valores = 0;
    // payload.forEach(element => {
    //     element.Cantidad = 1;
    // });
    state.cantCarrito = state.carrito.length;
    localStorage.setItem('carrito', JSON.stringify(state.carrito));
    localStorage.setItem('valores', JSON.stringify(state.valores));
    localStorage.setItem('cantCarrito', JSON.stringify(state.carrito.length))
},
  },

  actions: {
  // CRUD -> CREATE 
  async crearSuculenta({ commit }, agregarSuculenta) {
    await setDoc(doc(db, "Suculentas", agregarSuculenta.Codigo), {
      Categoria: agregarSuculenta.Categoria,
      Codigo: agregarSuculenta.Codigo,
      Descripcion: agregarSuculenta.Descripcion,
      Estado: agregarSuculenta.Estado,
      Nombre: agregarSuculenta.Nombre,
      Precio: agregarSuculenta.Precio,
      Stock: agregarSuculenta.Stock,
      Imagen: agregarSuculenta.Imagen
    });
    agregarSuculenta = '';
  },

  // CRUD -> READ 
  async getSuculentas({ commit }) {
    const suculentas = [];
    const listado = await getDocs(collection(db, "Suculentas"));
    listado.forEach(doc => {
      let suculenta = doc.data();
      suculenta.id = doc.id;
      suculentas.push(suculenta);
    });
    commit('getSuculentas', suculentas);
  },

  // OBTIENE DATOS DE ITEM SELECCIONADO
  async getSuculenta({ commit }, idSuculenta) {
    const datosSuculenta = await getDoc(doc(db, "Suculentas", idSuculenta));
    const suculenta = datosSuculenta.data();
    suculenta.id = datosSuculenta.id;
    suculenta.Categoria = datosSuculenta.data().Categoria;
    suculenta.Codigo = datosSuculenta.data().Codigo;
    suculenta.Nombre = datosSuculenta.data().Nombre;
    suculenta.Descripcion = datosSuculenta.data().Descripcion;
    suculenta.Precio = datosSuculenta.data().Precio;
    suculenta.Stock = datosSuculenta.data().Stock;
    suculenta.Estado = datosSuculenta.data().Estado;
    suculenta.Imagen = datosSuculenta.data().Imagen;
    commit('getSuculenta', suculenta);
  },

  // CRUD -> UPDATE 
  async modificarSuculenta({ commit }, mostrarSuculenta) {
    await setDoc(doc(db, "Suculentas", mostrarSuculenta.Codigo), {
      Categoria: mostrarSuculenta.Categoria,
      Codigo: mostrarSuculenta.Codigo,
      Nombre: mostrarSuculenta.Nombre,
      Descripcion: mostrarSuculenta.Descripcion,
      Precio: mostrarSuculenta.Precio,
      Stock: mostrarSuculenta.Stock,
      Estado: mostrarSuculenta.Estado,
      Imagen: mostrarSuculenta.Imagen
    });
  },

  // CRUD -> DELETE 
  async eliminarSuculenta({ commit }, idBorrar) {
    await deleteDoc(doc(db, "Suculentas", idBorrar));
  },

  async filtroName({ commit, state }, nombre) {
    const filtro = state.suculentas.filter((suculenta) => {
      let nombresSuculentas = suculenta.Nombre.toLowerCase();
      let nombreInput = nombre.toLowerCase();
      if (nombresSuculentas.includes(nombreInput)) {
        return suculenta;
      }
    });
    commit("getSuculentasFiltradas", filtro);
  },

},
})
