<template>
  <footer class="footer" style="background-color: #b9c7b8;">
    <div class="container text-center">
      <div class="row">
        <div class="col-md-6 offset-md-3 mb-4">
          <h5>¡Para comunicarte con nosotros, escríbenos a WhatsApp!</h5>
          <div class="social-icons">
            <h6>Estamos disponibles de lunes a viernes de 9:00 a 18:00.</h6>
            <a href="#" @click="sendWhatsAppMessage"><i class="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    sendWhatsAppMessage() {
      const phoneNumber = '+56985161258';
      const message = 'Si necesitas más información contáctate con nosotros';

      const link = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`;
      window.open(link);
    }
  }
}
</script>

<style>
.footer {
  left: 0;
  width: 100%;
  height: 154px;
  padding: 20px 0;
  font-size: 14px;
  margin-top: auto;
  
}

.footer h5,
.footer h6 {
  color: white;
}

.social-icons {
  margin-top: 20px;
}

.social-icons a {
  display: inline-block;
  margin-right: 10px;
  color: white;
  font-size: 20px;
}

.social-icons a:hover {
  color: #92868c;
}

</style>
