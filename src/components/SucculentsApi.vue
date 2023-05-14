<template>
  <div v-if="listaSuculentas">
    <div v-for="suculenta in listaSuculentas" :key="suculenta.id">
      <h1>{{ suculenta.common_name }}</h1>
      <img :src="suculenta.image_url" :alt="suculenta.common_name" />
    </div>
  </div>
  <div v-else>
    Cargando suculentas...
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
</style>
