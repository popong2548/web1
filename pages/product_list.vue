<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="3" v-for="product in products" :key="product.product_id">
        <v-card class="mx-auto" outlined hover>
          <v-img :src="product.image_url || '/v.png'" height="200px" contain></v-img>
          <v-card-text>
            <div class="font-weight-bold" style="color: #d32f2f;">{{ product.price }} ฿</div>
            <div class="mt-2 font-weight-bold">{{ product.name }}</div>
            <div class="mt-1" style="font-size: 14px; color: #757575;">{{ product.description }}</div>
          </v-card-text>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// ...
export default {
  name: 'ProductListPage',
  data() {
    return {
      products: [], // ข้อมูลสินค้าจะถูกเก็บที่นี่
    };
  },
  async mounted() {
    try {
      // ดึงข้อมูลสินค้าจาก API
      const productsData = await this.$axios.$get('/api/products_api.php');
      this.products = productsData;
    } catch (err) {
      console.error('โหลดข้อมูลสินค้าไม่สำเร็จ:', err);
    }
  },
  // ...
};
</script>

<style scoped>
.v-card {
  min-height: 370px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
}
.v-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
.v-card-text {
  flex-grow: 1;
}
.v-img {
  background: #f5f5f5;
}
</style>