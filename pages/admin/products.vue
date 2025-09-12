<template>
  <v-container>
    <v-card>
      <v-card-title>จัดการสินค้า</v-card-title>
      <v-card-text>
        <p>หน้านี้สำหรับจัดการสินค้าทั้งหมดในระบบ</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'admin-auth'
}
</script>