<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <v-btn text to="/product_list">
        สินค้า
      </v-btn>

      <v-btn text to="/cart">
        <v-badge :content="cartItemCount" :value="cartItemCount > 0" color="red" overlap>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
        <span class="ml-2">ตะกร้าสินค้า</span>
      </v-btn>

      <v-btn text to="/register">
        สมัครสมาชิก
      </v-btn>
      <v-btn text to="/login">
        เข้าสู่ระบบ
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary width="300">
      <v-list nav dense>
        <v-list-item to="/cart" link>
          <v-list-item-icon>
            <v-icon>mdi-cart</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ตะกร้าสินค้า</v-list-item-title>
        </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-main>
      <Nuxt />
    </v-main>

    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    ...mapGetters('cart', ['cartItemCount']),
  },
};
</script>

<style>
.title-shadow .white--text {
  text-shadow:
    2px 2px 4px #000,
    0 0 2px #000,
    0 1px 0 #000;
}
</style>