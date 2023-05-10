import { createStore } from 'vuex';
import { collection, getDocs, doc, getDoc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from "@/auth/auth.service";

// CONSTANTES CARRITO
const AGREGAR_AL_CARRITO = 'AGREGAR_AL_CARRITO';
const RESTAR_DEL_CARRITO = 'RESTAR_DEL_CARRITO';
const ELIMINAR_DEL_CARRITO = 'ELIMINAR_DEL_CARRITO';
const LIMPIAR_CARRITO = 'LIMPIAR_CARRITO';

export const SET_LOGIN_STATE = 'SET_LOGIN_STATE';

export default createStore({
  state: {
    suculentas: [],
    mostrarSuculenta: { Categoria: '', Codigo: '', Nombre: '', Descripcion: '', Precio: '', Stock: '', Estado: '', Imagen: '' },
    login: false,
    usuarioConectado: "",
    carga: false,
    suculentasFiltradas: [],
    carrito: [],
  },

  getters: {
    loginTrue(state) {
      return state.login;
    },
    totalCarrito(state) {
      return state.carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
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

    getSuculenta(state,payload){
      
    state.mostrarSuculenta = payload
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
    [AGREGAR_AL_CARRITO](state, producto) {
      const productoExistente = state.carrito.find((item) => item.Codigo === suculenta.Codigo);
      if (productoExistente) {
        productoExistente.cantidad++;
      } else {
        state.carrito.push({ ...producto, cantidad: 1 });
      }
    },
    [RESTAR_DEL_CARRITO](state, producto) {
      const productoExistente = state.carrito.find((item) => item.Codigo === suculenta.Codigo);
      if (productoExistente && productoExistente.cantidad > 1) {
        productoExistente.cantidad--;
      }
    },
    [ELIMINAR_DEL_CARRITO](state, producto) {
      state.carrito = state.carrito.filter((item) => item.Codigo !== producto.Codigo);
    },
    [LIMPIAR_CARRITO](state) {
      state.carrito = [];
    }
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
      async getSuculenta ({commit}, idSuculenta){
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
      commit('getSuculenta', suculenta)
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
        let nombresSuculentas = suculenta.nombre.toLowerCase();
        let nombreInput = nombre.toLowerCase();
        if (nombresSuculentas.includes(nombreInput)) {
          return suculenta;
        }
      });
      commit("getSuculentasFiltradas", filtro);
    },
  },
  modules: {}
});
