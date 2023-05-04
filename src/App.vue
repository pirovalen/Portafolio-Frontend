<template>
  <NavBar />
  <router-view />
  <Footer/>

  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue"
  import LoginView from "@/views/LoginView.vue"
  import Footer from "@/components/Footer.vue"
  

  export default {
    name: 'App',
    components: {
      NavBar,
      Footer
    }
  }
  </script>
  
  <style>
  </style>