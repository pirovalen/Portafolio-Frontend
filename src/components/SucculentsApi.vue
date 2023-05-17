<template>
  <div class="container mt-5">
    <div class="row justify-content-center py-5" v-if="$store.state.suculentas.length === 0">
      <div class="col-auto">
        <fade-loader :loading="loading" :color="color" :size="size" class="mb-5"></fade-loader>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-lg-4 mb-5 col-md-6"  v-for="suculenta in listaSuculentas" :key="suculenta.id">
        <div class="card border d-flex justify-content-center align-items-center" style="width: 18rem;">
          <img :src="suculenta.default_image.regular_url" :alt="suculenta.common_name" style="max-width: 200px; max-height: 200px;" />
          <div class="card-body">
            <h1 style="font-size: 14px;">{{ suculenta.common_name }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-btn">
    <button class="btn" @click="disminuir">Atrás</button> 
    <button class="btn" @click="aumentar">siguiente</button>

    <span>{{ page }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listaSuculentas: null,
      page:1
    };
  },
  methods: {
    aumentar(){
      this.page = this.page + 1;
      this.extraer();
    },
    disminuir(){
      if(this.page === 1){
        return;
      }
      this.page = this.page - 1;
      this.extraer();
    },
    async extraer(){
      try {
      let key = 'sk-cR3Q646017398627e924';
      // let url = 'https://perenual.com/api/species-list?key=' + key;
      let url = `https://perenual.com/api/species-list?page=${this.page}&key=${key}`;
      let response = await fetch(url);
      console.log(response)
      if (response.ok) {
        let suculentas = await response.json();
        this.listaSuculentas = suculentas.data;
        console.log(this.listaSuculentas);
      } else {
        console.error('Error al obtener los datos de la API.');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
    }
  },
  async created() {
    this.extraer();
  },
};
</script>

<style scoped>
.container-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2px;
}
.btn{
  padding: 10px 20px;
  background-color: #b9c7b8;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
}
.btn:active {
  background-color: #C7B8C0;
}

.suculenta-title {
  font-size: 14px;
}

.suculenta-image {
  width: 200px;
  height: auto;
}


.titulo{
  text-align: center;
  font-family: 'Montserrat', sans-serif;
}

.subtitulo{
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  padding-inline: 1rem;
}

.card {
  font-family: 'Montserrat', sans-serif;
  border-color: #C7b8c0;
}

.card-img-top{
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: contain;
  margin-top: 35px;
}

.card-body{
  padding-top: 3rem;
}

.btnComprar {
  background-color: #C7b8c0;
  color: white;
  border: 1px solid #C7b8c0;
  letter-spacing: 3px;
  padding: .6em 0;
}


.btnComprar:hover{
  background-color: #b9c7b8;
  border: 1px solid #b9c7b8;
} 

.btnDisabled{
  background-color: #C7b8c0;
  letter-spacing: 3px;
  color: rgb(70, 70, 70); 
  border: 1px solid #C7b8c0;
  padding: .6em 0;
}
</style>







