<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
    <div class="carousel-inner">
      <div class="carousel-item active align-middle h-50">
      <img src="../assets/home1.png" class="d-block w-100" alt="">
      
        <div class="carousel-caption d-none d-md-block align-middle">
          <h5>Hola1</h5>
          <p>jiji</p>
        </div>
      </div>
      <div class="carousel-item align-middle h-50">
        <img src="../assets/home2.png" class="d-block w-100" alt="">
        <div class="carousel-caption d-none d-md-block align-middle">
          <h5>hola 2</h5>
          <p>jiji</p>
        </div>
      </div>
      <div class="carousel-item align-middle h-50">
        <img src="../assets/home3.png" class="d-block w-100" alt="">
        <div class="carousel-caption d-none d-md-block align-middle">
          <h5>hola 3</h5>
          <p>jijij</p>
        </div>
      </div>
    </div>
  </div>
  </template>
      
  <script>
   
    export default {
    name: "Home-View",
    }
      
  </script>
      
  <style>
  .carousel-item{
    height: 600px;
  }
  .carousel-item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .carousel-caption{
    background-color: rgba(0, 0, 0, 0.385);
    border-radius: 1rem;
    max-width: 500px;
    margin-inline: auto;
    margin-bottom: 150px;
  }
  .carousel-item h5{
    font-family: 'Montserrat', sans-serif;
    font-size: 42px;
  }
  .carousel-item p{
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
  }
    .titulo{
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    }
    .subtitulo{
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    padding-inline: 15rem ;
    }
    </style>