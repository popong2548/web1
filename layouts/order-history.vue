<template>
  <v-container>
    <h1 class="text-h4 font-weight-bold mb-4">ประวัติคำสั่งซื้อ</h1>
    <v-card v-if="orders.length > 0">
      <v-list>
        <v-list-item v-for="order in orders" :key="order.order_id">
          <v-list-item-content>
            <v-list-item-title>Order #{{ order.order_id }}</v-list-item-title>
            <v-list-item-subtitle>วันที่: {{ new Date(order.order_date).toLocaleDateString() }} - สถานะ: {{ order.status }}</v-list-item-subtitle>
            <div>ราคารวม: {{ order.total_price }}</div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-alert v-else type="info">
      ยังไม่มีประวัติคำสั่งซื้อ
    </v-alert>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'OrderHistoryPage',
  middleware: 'auth',
  data() {
    return {
      orders: [],
    };
  },
  computed: {
    ...mapState({
      user: state => state.auth.user,
    }),
  },
  async mounted() {
    if (this.user && this.user.email) {
      try {
        const response = await this.$axios.$get(`/api/get_order_history.php?email=${this.user.email}`);
        this.orders = response;
      } catch (error) {
        console.error('ไม่สามารถโหลดประวัติคำสั่งซื้อได้:', error);
      }
    }
  },
};
</script>