<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="6000">
    <div class="carousel-inner">
      <div class="carousel-item active align-middle">
        <img src="../assets/1.jpg" class="imgHome d-block w-100" alt="">
        <div class="carousel-caption d-none d-md-block align-middle d-flex flex-column justify-content-center">
          <h5>Amor por las suculentas</h5>
          <p>En nuestra página, encontrarás un emprendimiento familiar que nació del amor y la fascinación por las suculentas. Cada una de estas plantas representa un capítulo en nuestra historia, desde los primeros brotes hasta el crecimiento de nuestro negocio. </p>
        </div>
      </div>
      <div class="carousel-item align-middle">
        <img src="../assets/2.jpg" class="imgHome d-block w-100" alt="">
        <div class="carousel-caption d-none d-md-block align-middle d-flex flex-column justify-content-center">
          <h5>Únicas y exclusivas</h5>
          <p>Te ofrecemos una selección cuidadosamente curada de suculentas que son verdaderas joyas botánicas. Nos enorgullece presentarte variedades de suculentas que son difíciles de encontrar en otros lugares. Te invitamos a explorar nuestro catálogo y descubrir la belleza única que estas plantas .</p>
        </div>
      </div>
      <div class="carousel-item align-middle">
        <img src="../assets/1.jpg" class="imgHome d-block w-100" alt="">
        <div class="carousel-caption d-none d-md-block align-middle d-flex flex-column justify-content-center">
          <h5>Experiencia y calidad</h5>
          <p>Nos comprometemos a ofrecerte suculentas de la más alta calidad. Nos aseguramos de que cada planta que llegue a tus manos esté en perfectas condiciones. Cuidamos cada detalle, desde la selección de las variedades más hermosas hasta el embalaje cuidadoso para el envío. </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.carousel-item img {
  max-height: 224px !important;
  object-fit: contain;
}

.carousel-caption {
  background-color: rgba(0, 0, 0, 0.385);
  border-radius: 1rem;
  max-width: 600px;
  margin-inline: auto;
  margin-top: -10px;
  margin-bottom: -80px;
}

.carousel-item h5 {
  font-family: 'Montserrat', sans-serif;
  font-size: 60px;
}

.carousel-item p {
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
}
</style>