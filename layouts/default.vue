<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold title-shadow">
        <router-link to="/" class="white--text" style="text-decoration: none;">
          Fogger Shop
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn text to="/">
        หน้าแรก
      </v-btn>
      <v-btn text to="/productList">
        สินค้า
      </v-btn>
      <v-btn text to="/news">
        ข่าวสาร
      </v-btn>
      <v-btn text to="/explore">
        สมัครสมาชิก
      </v-btn>
      <v-btn text to="/login">
        เข้าสู่ระบบ
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary width="300">
  <v-list nav dense>
    <v-list-item to="/" link>
      <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>
      <v-list-item-title>หน้าแรก</v-list-item-title>
    </v-list-item>
    <v-list-item to="/productList" link>
      <v-list-item-icon>
        <v-icon>mdi-shopping</v-icon>
      </v-list-item-icon>
      <v-list-item-title>สินค้า</v-list-item-title>
    </v-list-item>
    <v-list-item to="/news" link>
      <v-list-item-icon>
        <v-icon>mdi-newspaper</v-icon>
      </v-list-item-icon>
      <v-list-item-title>ข่าวสาร</v-list-item-title>
    </v-list-item>
    <v-list-item to="/explore" link>
      <v-list-item-icon>
        <v-icon>mdi-magnify</v-icon>
      </v-list-item-icon>
      <v-list-item-title>สมัครสมาชิก</v-list-item-title>
    </v-list-item>
    <v-list-item to="/login" link>
      <v-list-item-icon>
        <v-icon>mdi-account</v-icon>
      </v-list-item-icon>
      <v-list-item-title>เข้าสู่ระบบ</v-list-item-title>
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
export default {
  data() {
    return {
      drawer: false,
    };
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