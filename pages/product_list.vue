<template>
  <v-container fluid>
    <div class="text-center mb-6">
      <h2 class="text-h4 font-weight-bold" style="color: #000000;">📦 สินค้าทั้งหมดของFogger Shop 📦</h2>
      <p class="text-subtitle-1" style="color: #000000;">__________________</p>
    </div>
    <v-row>
      <v-col cols="12" md="3" v-for="(product, i) in products" :key="product.product_id">
        <v-card class="mx-auto" outlined hover>
          <v-img :src="product.image_url || '/v.png'" height="200px" contain></v-img>
          <v-card-text>
            <div class="font-weight-bold" style="color: #d32f2f;">{{ product.price }} ฿</div>
            <div class="mt-2 font-weight-bold">{{ product.name }}</div>
            <div style="font-size: 13px; color: #757575;">{{ product.category }}</div>
            <div style="font-size: 13px; color: #757575;">{{ product.series }}</div>
            <div style="font-size: 13px; color: #757575;">{{ product.manufacturer }}</div>
            <div style="font-size: 13px; color: #757575;">{{ product.description }}</div>
            <div style="font-size: 13px; color: #757575;">{{ product.release_date }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'TestProductsPage',
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    try {
      const res = await fetch('http://localhost/foggershop/products_api.php');
      this.products = await res.json();
    } catch (err) {
      console.error('โหลดข้อมูลสินค้าไม่สำเร็จ:', err);
    }
  },
};
</script>

<style scoped>
.v-card {
  min-height: 370px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.v-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
.v-img {
  background: #f5f5f5;
}
.v-divider {
  max-width: 150px;
  margin: auto;
  border-width: 2px;
  border-color: #3f51b5;
}
</style>
