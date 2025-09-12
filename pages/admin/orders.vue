<template>
  <v-container>
    <v-card>
      <v-card-title>จัดการออเดอร์</v-card-title>
      <v-card-text>
        <p>หน้านี้สำหรับจัดการออเดอร์ทั้งหมดในระบบ</p>
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