<template>
  <v-container>
    <h1 class="text-h4 font-weight-bold mb-6 text-center">แผงควบคุมสำหรับผู้ดูแลระบบ</h1>
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" outlined hover to="/admin/products" height="200">
          <v-card-text class="d-flex flex-column align-center justify-center fill-height">
            <v-icon size="64" color="primary">mdi-package-variant-closed</v-icon>
            <h2 class="text-h5 font-weight-bold mt-4">จัดการสินค้า</h2>
            <p class="mt-2 text-center">เพิ่ม ลบ และแก้ไขข้อมูลสินค้าในร้านค้า</p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto" outlined hover to="/admin/users" height="200">
          <v-card-text class="d-flex flex-column align-center justify-center fill-height">
            <v-icon size="64" color="success">mdi-account-group</v-icon>
            <h2 class="text-h5 font-weight-bold mt-4">จัดการผู้ใช้</h2>
            <p class="mt-2 text-center">ดูและจัดการข้อมูลผู้ใช้ในระบบ</p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto" outlined hover to="/admin/orders" height="200">
          <v-card-text class="d-flex flex-column align-center justify-center fill-height">
            <v-icon size="64" color="error">mdi-receipt</v-icon>
            <h2 class="text-h5 font-weight-bold mt-4">จัดการออเดอร์</h2>
            <p class="mt-2 text-center">ดูและอัปเดตสถานะของคำสั่งซื้อ</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'admin'
  // middleware: 'admin-auth' // ลบออก
}
</script>

<style scoped>
.v-card {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;
}
.v-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}
</style>