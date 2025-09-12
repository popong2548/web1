<template>
  <v-app>
    <v-app-bar app color="black" dark>
        <v-toolbar-title>Fogger Shop</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/">
            หน้าหลัก
        </v-btn>
        <v-btn text to="/login">
            เข้าสู่ระบบ
        </v-btn>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'GuestLayout'
}
</script>