<template></template>
<!-- <template>
    <div id="login" class="mt-5">
      <form @submit.prevent="login" ref="form">
        <div class="form-group">
          <label>Correo Electrónico</label>
          <input name="email" type="email" v-model.trim="loginForm.email" required />
        </div>
        <div class="form-group">
          <label>Contraseña</label>
          <input name="password" type="password" v-model.trim="loginForm.password" required />
        </div>
        <button type="submit">Iniciar Sesión</button>
        <br /><br />
        <div id="login" class="mt-2"> 
          <p>¿No tienes cuenta?</p>
          <button type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="btnRegistro">Regístrate!</button>
      
        </div>
      </form>
      <br />
      <div v-if="error" class ="mb-4" >{{ error }}</div>
    </div>
  
   Modal -->
  <!-- <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Registro</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="Email1" class="form-label">Correo Electrónico</label>
              <input type="email" class="form-control" v-model.trim="loginForm.email1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="Password1" class="form-label">Contraseña</label>
              <input type="password" class="form-control" v-model.trim="loginForm.password1">
            </div>
          </form>
        </div>
        <div class="modal-footer justify-content-center">
          <button @click="registrarUsuario()" type="submit" data-bs-dismiss="modal">Aceptar</button>
          <button type="submit" data-bs-dismiss="modal" id="cerrarModalRegistro">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import { auth } from "@/auth/auth.service";
  import { SET_LOGIN_STATE } from "@/store/index";
  import {mapMutations} from 'vuex';
  
  
  export default {
    data() {
      return {
        loginForm: {
          email: "",
          password: "",
          email1:"",
          password1:""
        },
        error: "",
      };
    },
    methods: {
  ...mapMutations(['cambiaEstadoLoginFalse']),
  
      // Login o acceso de usuarios existentes -> método signInWithEmailAndPassword
  
      async login() {
        try {
          if (!this.$refs.form.checkValidity()) return;
          await auth.signInWithEmailAndPassword(
            this.loginForm.email,
            this.loginForm.password,
            this.$store.state.usuarioConectado= this.loginForm.email
          );
  
  
          this.$store.commit(SET_LOGIN_STATE, true);
          this.$router.push({ name: "CoursesView" });
          this.error= "";
          this.$store.commit(cambiaEstadoLogin);
        } catch (err) {
          console.log(err.message);
          this.error = "Usuario o clave incorrecta";
        }
      },
  
      // Registro de usuarios nuevos -> método createUserWithEmailAndPassword
  
      registrarUsuario (){
        auth.createUserWithEmailAndPassword(this.loginForm.email1,this.loginForm.password1)
          .then((userCredential)=> {     
          this.$store.state.usuarioConectado = this.loginForm.email1
          this.showAlert("Usuario registrado correctamente")
          this.$store.commit(SET_LOGIN_STATE, true);
          this.$router.push({ name: "CoursesView" });
          this.$store.commit(cambiaEstadoLogin);
        })
        .catch((error) => {
          this.$store.state.usuarioConectado='';
          this.codigoError = error.code;
          this.mensajeError = error.message;
        });
      },
      showAlert(texto1){
          Swal.fire({
          title:texto1,
          icon:"success",  
          confirmButtonText:"Ok",
          })
      }
    },
    mounted() {
  
      // Para obtener el usuario con sesión activa -> método onAuthStateChanged 
  
      auth.onAuthStateChanged((user) =>{
        this.$store.state.usuarioConectado=user.email
        this.showAlert("Sesión iniciada")
        this.$store.commit(SET_LOGIN_STATE, true);
        this.$router.push({ name: "CoursesView" });
        this.$store.commit(cambiaEstadoLogin);
      });
    },
  }
  
  </script>
  <style>
  #login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 50px;
    margin-top: -20px;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  .form-group label {
    margin-bottom: 5px;
    font-weight: 500;
  }
  .form-group input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
  }
  button[type="submit"] {
    margin-top: 1.5em;
    padding: 10px 20px;
    background-color: #F2B119;
    border: none;
    color: #fff;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    width: 15em;
    letter-spacing: 2px;
  }
  
  #btnRegistro, #cerrarModalRegistro{
    background-color: white;
    color: black;
    border: 2px solid #F2B119;
    margin: 0 0 2em 0;
  }
  
  #cerrarModalRegistro{
    margin-top: 1em;
  }
  
  button[type="submit"]:hover {
    background-color: #8B82B7;
  }
  </style> -->