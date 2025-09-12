<template>
  <v-container>
    <h1 class="text-h4 font-weight-bold mb-4">ตะกร้าสินค้าของคุณ</h1>
    <v-card v-if="cartItemCount > 0">
      <v-list>
        <v-list-item v-for="item in cartItems" :key="item.cart_id">
          <v-list-item-avatar>
            <v-img :src="item.image_url"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.price }} ฿ x {{ item.quantity }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="removeFromCart(item.product_id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <span class="text-h6">รวมทั้งหมด: {{ cartTotalPrice }} ฿</span>
        <v-btn color="primary" class="ml-4">ชำระเงิน</v-btn>
      </v-card-actions>
    </v-card>
    <v-alert v-else type="info">
      ตะกร้าสินค้าของคุณว่างเปล่า
    </v-alert>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CartPage',
  middleware: 'auth',
  computed: {
    ...mapGetters('cart', ['cartItems', 'cartItemCount', 'cartTotalPrice']),
  },
  methods: {
    ...mapActions('cart', ['fetchCart', 'removeFromCart']),
  },
  created() {
    this.fetchCart();
  },
};
</script>