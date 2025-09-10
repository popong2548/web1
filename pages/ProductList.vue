<template>
  <v-container>
    <v-row v-if="loading" class="text-center">
      <v-col>
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
        <p class="mt-2">กำลังโหลดสินค้า...</p>
      </v-col>
    </v-row>
    <v-row v-else-if="error" class="text-center">
      <v-col>
        <v-alert type="error" outlined>
          {{ error }}
        </v-alert>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="products"
          :items-per-page="10"
          class="elevation-1"
        >
          <template v-slot:item.image_url="{ item }">
            <v-img :src="item.image_url" max-height="80" max-width="80" contain></v-img>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: 'ProductListPage',
  data() {
    return {
      products: [],
      loading: true,
      error: null,
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'ชื่อสินค้า', value: 'name' },
        { text: 'รายละเอียด', value: 'description' },
        { text: 'ราคา', value: 'price' },
        { text: 'จำนวนคงเหลือ', value: 'stock' },
        { text: 'หมวดหมู่', value: 'category_id' },
        { text: 'รูปภาพ', value: 'image_url' },
      ],
    };
  },
  async created() {
    try {
      const res = await axios.get("http://localhost/model_shop/model_select.php");
      // กรณี model_select.php ส่งข้อมูลเป็น JSON
      if (typeof res.data === 'string') {
        this.products = JSON.parse(res.data);
      } else {
        this.products = res.data;
      }
    } catch (err) {
      console.error('Error fetching products:', err);
      this.error = 'ไม่สามารถดึงข้อมูลสินค้าได้ กรุณาลองใหม่อีกครั้ง';
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
</style>
