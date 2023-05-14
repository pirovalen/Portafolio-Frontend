<template>
    <div class="container">
      <div class="content">
        <img src="https://perenual.com/storage/image/error_asset/plant.png" alt="">
        <div class="title">404 Not Found</div>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from '../components/NavBar.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    components: {
      NavBar,
      Footer
    }
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
  }
  
  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  img {
    width: 45%;
    margin-bottom: 200px;
  }
  
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #333;
    font-size: 24px;
    margin-top: 30px; /* Ajusta este valor para la separación deseada */
  }
  </style>
  