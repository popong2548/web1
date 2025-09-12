<template>
  <v-container fluid>
    <div class="text-center mb-6">
      <h2 class="text-h4 font-weight-bold" style="color: #000000;">📦 สินค้าทั้งหมดของFogger Shop 📦</h2>
      <p class="text-subtitle-1" style="color: #000000;">__________________</p>
    </div>
    <v-row>
      <v-col cols="12" md="3" v-for="product in products" :key="product.product_id">
        <v-card class="mx-auto" outlined hover>
          <v-img :src="product.image_url || '/v.png'" height="200px" contain></v-img>
          <v-card-text>
            <div class="font-weight-bold" style="color: #d32f2f;">{{ product.price }} ฿</div>
            <div class="mt-2 font-weight-bold">{{ product.name }}</div>
            </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="handleAddToCart(product)">
              <v-icon left>mdi-cart-plus</v-icon>
              เพิ่มลงตะกร้า
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'TestProductsPage',
  // layout: 'guest', // <-- บรรทัดนี้ถูกลบออกแล้ว
  data() {
    return {
      products: [],
    };
  },
  computed: {
    ...mapState({
      user: state => state.auth.user,
    }),
  },
  async mounted() {
    try {
      const productsData = await this.$axios.$get('/api/products_api.php');
      this.products = productsData;
    } catch (err) {
      console.error('โหลดข้อมูลสินค้าไม่สำเร็จ:', err);
    }
  },
  methods: {
    ...mapActions('cart', ['addToCart']),
    handleAddToCart(product) {
      if (this.user) {
        this.addToCart(product);
      } else {
        this.$router.push('/login');
      }
    },
  },
};
</script>

<style scoped>
/* CSS Styles here */
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
</style>