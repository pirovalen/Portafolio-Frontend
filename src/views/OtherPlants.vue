<template>
  <div class="container">
    <transition name="fade-down">
      <transition-group>
        <div class="content" v-if="succulentsLoaded">
          <div class="col-auto">
            <SucculentsApi></SucculentsApi>
          </div>
        </div>
      </transition-group>
    </transition>
    <div class="spinner-container" v-if="loading && !succulentsLoaded">
      <fade-loader :color="color" :size="size"></fade-loader>
    </div>
  </div>
</template>

<script>
import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
import SucculentsApi from '../components/SucculentsApi.vue';

export default {
  components: {
    FadeLoader,
    SucculentsApi,
  },

  data() {
    return {
      color: '#c7b8c0',
      loading: true,
      succulentsLoaded: false,
    };
  },

  methods: {
    cargarImagenes() {
      // Simulación de la carga de imágenes
      setTimeout(() => {
        this.loading = false;
        this.succulentsLoaded = true;
      }, 2000);
    },
  },

  mounted() {
    this.cargarImagenes();
    window.scrollTo(0, 0); // Desplaza la página hacia la parte superior
  },
};
</script>

<style>
.spinner-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  opacity: 1;
  /* Mostrar el spinner mientras loading sea true */
}

.fade-down-enter-active {
  animation: fadeDown 0.5s ease forwards;
}

.fade-down-leave-active {
  transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.fade-down-enter {
  opacity: 0;
  transform: translateY(-100%);
}

.fade-down-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

@keyframes fadeDown {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Añade la regla para ocultar el spinner cuando succulentsLoaded sea true */
.spinner-container[style*="opacity: 0"] {
  display: none;
}
</style>
