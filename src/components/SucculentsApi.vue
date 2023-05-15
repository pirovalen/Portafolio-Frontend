<template>
  <div class="container">
    <div v-if="listaSuculentas">
      <div v-for="suculenta in listaSuculentas" :key="suculenta.id">
        <h1 style="font-size: 14px;">{{ suculenta.common_name }}</h1>
        <img :src="suculenta.default_image.regular_url" :alt="suculenta.common_name" style="max-width: 200px; max-height: 200px;" />
      </div>
    </div>
    <div v-else>
      Cargando suculentas...
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      listaSuculentas: null,
    };
  },

  async created() {
    try {
      let key = 'sk-cR3Q646017398627e924';
      let url = 'https://perenual.com/api/species-list?key=' + key;
      let response = await fetch(url);
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
  },
};
</script>

<style>


.suculenta-title {
  font-size: 14px;
}

.suculenta-image {
  width: 200px;
  height: auto;
}
</style>







