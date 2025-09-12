<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <v-toolbar-title>Fogger Shop</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/product_list">สินค้า</v-btn>
      <v-btn text to="/cart">
        <v-badge :content="cartItemCount" :value="cartItemCount > 0" color="red" overlap>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
        <span class="ml-2">ตะกร้าสินค้า</span>
      </v-btn>

      <v-menu offset-y v-if="$store.state.auth.user">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon left>mdi-account</v-icon>
            {{ $store.state.auth.user.email }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ออกจากระบบ</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('cart', ['cartItemCount']),
  },
  methods: {
    // เพิ่มฟังก์ชันนี้สำหรับออกจากระบบ
    async logout() {
      try {
        await this.$fire.auth.signOut();
        // หลังจากออกจากระบบ ให้ redirect ไปที่หน้า login
        this.$router.push('/login');
      } catch (e) {
        console.error("Logout Error:", e);
      }
    }
  }
};
</script>