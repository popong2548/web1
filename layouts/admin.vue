<template>
  <v-app>
    <v-navigation-drawer app permanent>
      </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Admin Control</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">กลับหน้าร้าน</v-btn>
      <v-btn text @click="logout">
        <v-icon left>mdi-logout</v-icon>
        ออกจากระบบ
      </v-btn>
      </v-app-bar>

    <v-main style="background-color: #f5f5f5;">
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AdminLayout',
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
    },
  },
};
</script>