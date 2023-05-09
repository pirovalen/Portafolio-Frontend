import { createStore } from 'vuex'
import { collection, getDocs, doc, getDoc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from "@/auth/auth.service"

export const SET_LOGIN_STATE = 'SET_LOGIN_STATE';

export default createStore({
  state: {
    suculentas: [],
    mostrarSuculenta: { categoria: '', codigo: '', descripcion: '', estado: '', nombre: '', precio: '', stock: '', vendidos: '', img: '' },
    login: false,
    usuarioConectado: "",
    carga: false,
    suculentasFiltradas: []
  },

  getters: {
    loginTrue(state) {
      return state.login;
    }
  },

  mutations: {
    [SET_LOGIN_STATE](state, payload) {
      state.login = payload;
    },
    getSuculentas(state, payload) {
      state.suculentas = payload
      state.suculentasFiltradas = payload
    },
    setMostrarSuculenta(state, payload) {
      state.mostrarSuculenta = payload
    },
    cambiaEstadoLogin(state) {
      state.login = true
    },
    cambiaEstadoLoginFalse(state) {
      state.login = false
    },
    getSuculentasFiltradas(state, payload) {
      state.suculentasFiltradas = payload
    }
  },

  actions: {
    
    // CRUD -> CREATE 
    async crearSuculenta({ commit }, agregarSuculenta) {
      await setDoc(doc(db, "Suculentas", agregarSuculenta.codigo), {
        categoria: agregarSuculenta.categoria,
        codigo: agregarSuculenta.codigo,
        descripcion: agregarSuculenta.descripcion,
        estado: agregarSuculenta.estado,
        nombre: agregarSuculenta.nombre,
        precio: agregarSuculenta.precio,
        stock: agregarSuculenta.stock,
        vendidos: agregarSuculenta.vendidos,
        img: agregarSuculenta.img
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

    // Obtiene datos del item seleccionado 
    async getSuculenta({ commit }, idSuculenta) {
      const datosSuculenta = await getDoc(doc(db, "Suculentas", idSuculenta));
      const suculenta = datosSuculenta.data();
      suculenta.id = datosSuculenta.id;
      state.suculentas=suculenta;
      state.suculentasFiltradas=state.suculentas;
      // commit('setMostrarSuculenta', suculenta);
    },

    // CRUD -> UPDATE 
    async modificarSuculenta({ commit }, mostrarSuculenta) {
      await setDoc(doc(db, "Suculentas", mostrarSuculenta.codigo), {
        categoria: mostrarSuculenta.categoria,
        codigo: mostrarSuculenta.codigo,
        descripcion: mostrarSuculenta.descripcion,
        estado: mostrarSuculenta.estado,
        nombre: mostrarSuculenta.nombre,
        precio: mostrarSuculenta.precio,
        stock: mostrarSuculenta.stock,
        vendidos: mostrarSuculenta.vendidos,
        img: mostrarSuculenta.img
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
