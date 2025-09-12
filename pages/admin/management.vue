<template>
  <v-container fluid>
    <h1 class="text-h4 font-weight-bold mb-4">ระบบจัดการหลังบ้าน</h1>
    <v-card>
      <v-tabs v-model="tab" background-color="primary" dark>
        <v-tab value="products">
          <v-icon left>mdi-package-variant-closed</v-icon>
          จัดการสินค้า
        </v-tab>
        <v-tab value="users">
          <v-icon left>mdi-account-group</v-icon>
          จัดการผู้ใช้
        </v-tab>
        <v-tab value="orders">
          <v-icon left>mdi-receipt</v-icon>
          จัดการออเดอร์
        </v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="products">
            <v-card flat>
              <v-card-text>
                <p class="text-h6">ส่วนจัดการสินค้า</p>
                <p>คุณสามารถเพิ่ม ลบ แก้ไข และดูข้อมูลสินค้าทั้งหมดได้จากที่นี่</p>
              </v-card-text>
            </v-card>
          </v-window-item>

          <v-window-item value="users">
            <v-card flat>
              <v-card-text>
                <p class="text-h6">ส่วนจัดการผู้ใช้</p>
                <p>คุณสามารถดูข้อมูลและจัดการสิทธิ์ของผู้ใช้ทั้งหมดได้จากที่นี่</p>
              </v-card-text>
            </v-card>
          </v-window-item>

          <v-window-item value="orders">
            <v-card flat>
              <v-card-text>
                <p class="text-h6">ส่วนจัดการออเดอร์</p>
                <p>คุณสามารถดูและอัปเดตสถานะของคำสั่งซื้อทั้งหมดได้จากที่นี่</p>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'auth-layout',
  data() {
    return {
      tab: 'products',
    };
  },
  watch: {
    '$route.query.tab': {
      handler(newTab) {
        if (newTab) {
          this.tab = newTab;
        }
      },
      immediate: true,
    },
  },
  created() {
    if (this.$route.query.tab) {
      this.tab = this.$route.query.tab;
    }
  },
};
</script>

<style scoped>
.v-card-text {
  padding-top: 20px;
}
</style>