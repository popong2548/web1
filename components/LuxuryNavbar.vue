<template>
  <v-app-bar app flat color="#fff" class="luxury-navbar" height="80">
    <v-row align="center" class="w-100">
      <v-col cols="12" md="3" class="d-flex align-center">
        <v-img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png" contain max-width="40" class="mr-2" />
        <span class="luxury-title">Luxury Shop</span>
      </v-col>
      <v-col cols="12" md="6">
        <v-tabs background-color="transparent" grow slider-color="#181818" class="luxury-tabs">
          <v-tab to="/">หน้าแรก</v-tab>
          <v-tab to="/products">สินค้า</v-tab>
          <v-tab to="/about">เกี่ยวกับเรา</v-tab>
          <v-tab to="/contact">ติดต่อ</v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="12" md="3" class="d-flex justify-end">
        <v-btn icon color="#181818">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <v-btn icon color="#181818">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: 'LuxuryNavbar',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
.luxury-navbar {
  font-family: 'Playfair Display', 'Sarabun', serif;
  border-bottom: 1px solid #eee;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  background: #fff !important;
  height: 80px !important;
}
.luxury-title {
  font-size: 2rem;
  font-weight: 700;
  color: #181818;
  letter-spacing: 2px;
  font-family: 'Playfair Display', serif;
}
.luxury-tabs .v-tab {
  font-size: 1.2rem;
  font-weight: 500;
  color: #181818 !important;
  text-transform: none;
  font-family: 'Playfair Display', serif;
  padding: 0 24px;
}
.luxury-tabs .v-tab--active {
  color: #fff !important;
  background: #181818 !important;
  border-radius: 24px;
}
.v-btn > .v-icon {
  color: #181818 !important;
}
</style>
