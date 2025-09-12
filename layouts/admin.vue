<template>
  <v-app>
    <v-navigation-drawer app permanent>
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item to="/admin/management?tab=products">
            <v-list-item-icon>
              <v-icon>mdi-package-variant-closed</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>จัดการสินค้า</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/admin/management?tab=users">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>จัดการผู้ใช้</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/admin/management?tab=orders">
            <v-list-item-icon>
              <v-icon>mdi-receipt</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>จัดการออเดอร์</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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
    async logout() {
      try {
        await this.$fire.auth.signOut();
        this.$router.push('/login');
      } catch (e) {
        console.error("Logout Error:", e);
      }
    },
  },
};
</script>