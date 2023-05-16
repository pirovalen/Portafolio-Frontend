<template>
  <div id="login-container"> 
  <div id="login" class="d-flex flex-column justify-content-center align-items-center">
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
      </form>
      <br />
      <div v-if="error" class="mb-4" >{{ error }}</div>
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
          this.$router.push({ name: "PlantasView" });
          this.error= "";
          this.$store.commit(cambiaEstadoLogin);
        } catch (err) {
          console.log(err.message);
          this.error = "Usuario o clave incorrecta";
        }
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
        this.$router.push({ name: "AdminView" });
        this.$store.commit(cambiaEstadoLogin);
      });
    },
  }
  </script>
  
  <style scoped>
  
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  #login-container {
    flex-grow: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    color: #2c3e50;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  
  .form-group label {
    margin-bottom: 15px;
    font-weight: 500;
  }
  
  .form-group input {
    padding: 10px;
    border: 1px solid #C7b8c0;
    border-radius: 5px;
    font-size: 16px;
  }
  
  button[type="submit"] {
    margin-top: 1.5em;
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
    
  button[type="submit"]:hover {
    background-color: #C7b8c0;
  }
</style>