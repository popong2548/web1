<template>
  <v-container>
    <v-card>
      <v-card-title>จัดการผู้ใช้</v-card-title>
      <v-card-text>
        <p>หน้านี้สำหรับจัดการผู้ใช้ทั้งหมดในระบบ</p>
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