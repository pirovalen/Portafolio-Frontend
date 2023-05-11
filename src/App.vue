<template>
  <NavBar />
  <router-view />
  <Footer/>

  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue"
  import LoginView from "@/views/LoginView.vue"
  import Footer from "@/components/Footer.vue"
  import CartOffCanvas from './components/CartOffCanvas.vue';
  

  export default {
    name: 'App',
    components: {
      NavBar,
      CartOffCanvas,
      Footer
    }
  }
  </script>
  
  <style>
  </style>