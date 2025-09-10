<template>
  <v-card class="mx-auto rounded-lg" outlined>
    <v-img
      :src="product.image_url || 'https://via.placeholder.com/400?text=No+Image'"
      height="250px"
      cover
      class="white--text align-end"
    ></v-img>

    <v-card-title class="font-weight-bold text-truncate">
      {{ product.name }}
    </v-card-title>

    <v-card-subtitle class="pb-0">
      ราคา: {{ product.price }} บาท
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div class="product-description">{{ product.description }}</div>
      <div class="mt-2">
        <v-icon small>mdi-package-variant-closed</v-icon>
        คงเหลือ: {{ product.stock }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        :disabled="product.stock <= 0"
        class="text-none font-weight-bold"
      >
        <v-icon left>mdi-cart-plus</v-icon>
        เพิ่มลงตะกร้า
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  // คอมโพเนนต์นี้จะรับข้อมูลสินค้าผ่าน props
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;                                     
}
</style>