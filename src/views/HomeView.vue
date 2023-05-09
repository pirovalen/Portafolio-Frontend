<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
    <div class="carousel-inner">
      <div class="carousel-item active align-middle h-50">
        <img src="../assets/1.jpg" class="d-block w-100" alt="">
        <div class="carousel-caption d-none d-md-block align-middle d-flex flex-column justify-content-center">
          <h5>Título 1</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, a voluptate corrupti magni praesentium atque illo in amet. Quos quibusdam earum cumque beatae? Cumque explicabo consequatur qui et illum blanditiis!</p>
        </div>
      </div>
      <div class="carousel-item align-middle h-50">
        <img src="../assets/2.jpg" class="d-block w-100" alt="">
        <div class="carousel-caption d-none d-md-block align-middle d-flex flex-column justify-content-center">
          <h5>Título 2</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi beatae neque corrupti quasi architecto dignissimos laborum suscipit explicabo possimus repellendus porro, animi similique mollitia maxime repellat velit asperiores assumenda fugiat.</p>
        </div>
      </div>
      <div class="carousel-item align-middle h-50">
        <img src="../assets/3.jpg" class="d-block w-100" alt="">
        <div class="carousel-caption d-none d-md-block align-middle d-flex flex-column justify-content-center">
          <h5>Título 3</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sit suscipit tempore, animi vel error quae hic in accusamus nisi fugiat dolores fuga pariatur autem laboriosam maiores ea vitae eligendi!</p>
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
.carousel-item {
  height: 600px;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-caption {
  background-color: rgba(0, 0, 0, 0.385);
  border-radius: 1rem;
  max-width: 800px;
  margin-inline: auto;
  margin-bottom: 150px;
}

.carousel-item h5 {
  font-family: 'Montserrat', sans-serif;
  font-size: 50px;
}

.carousel-item p {
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
}

.titulo {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
}

.subtitulo {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  padding-inline: 15rem;
}
</style>