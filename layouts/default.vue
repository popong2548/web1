<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <v-toolbar-title>Fogger Shop</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/product_list">สินค้า</v-btn>

      <template v-if="$store.state.auth.user">
        <v-btn text to="/order-history">ประวัติคำสั่งซื้อ</v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              <v-icon left>mdi-account-circle</v-icon>
              {{ $store.state.auth.user.email }}
              <v-icon right>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item to="/profile">
              <v-list-item-icon>
                <v-icon>mdi-account-edit</v-icon>
              </v-list-item-icon>
              <v-list-item-title>แก้ไขโปรไฟล์</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout">
              <v-list-item-icon>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title>ออกจากระบบ</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>

      <template v-else>
        <v-btn text to="/register">
            สมัครสมาชิก
        </v-btn>
        <v-btn text to="/login">
            เข้าสู่ระบบ
        </v-btn>
      </template>

    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DefaultLayout',
  computed: {
    ...mapGetters('cart', ['cartItemCount']),
  },
  methods: {
    async logout() {
      try {
        await this.$fire.auth.signOut();
        this.$router.push('/');
      } catch (e) {
        console.error("Logout Error:", e);
      }
    }
  }
};
</script>