<template>
  <v-navigation-drawer app color="#fff" class="luxury-sidebar" width="220">
    <v-list dense>
      <v-list-item-group>
        <v-list-item to="/">
          <v-list-item-icon><v-icon color="#181818">mdi-home</v-icon></v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="luxury-sidebar-title">หน้าแรก</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/products">
          <v-list-item-icon><v-icon color="#181818">mdi-cube-outline</v-icon></v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="luxury-sidebar-title">สินค้า</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/about">
          <v-list-item-icon><v-icon color="#181818">mdi-information-outline</v-icon></v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="luxury-sidebar-title">เกี่ยวกับเรา</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/contact">
          <v-list-item-icon><v-icon color="#181818">mdi-phone-outline</v-icon></v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="luxury-sidebar-title">ติดต่อ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'LuxurySidebar',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
.luxury-sidebar {
  font-family: 'Playfair Display', 'Sarabun', serif;
  background: #fff !important;
  border-right: 1px solid #eee;
}
.luxury-sidebar-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #181818;
  font-family: 'Playfair Display', serif;
}
</style>
