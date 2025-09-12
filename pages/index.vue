<template>
  <v-container fluid>
    <div class="text-center mb-6">
      <h2 class="text-h4 font-weight-bold" style="color: #000000;">📦 แนะนำสินค้า 📦</h2>
      <p class="text-subtitle-1" style="color: #000000;">✨ งานโมเดลสวยๆ ✨</p>
    </div>
    <v-row>
      <v-col cols="12" md="3" v-for="(product, i) in recommendedProducts" :key="i">
        <v-card class="mx-auto" outlined hover>
          <v-img :src="product.image" height="200px" contain></v-img>
          <v-card-text>
            <div class="font-weight-bold" style="color: #d32f2f;">{{ product.price }}</div>
            <div style="color: #757575; font-size: 14px; text-decoration: line-through;">{{ product.originalPrice }}</div>
            <div class="mt-2 font-weight-bold">{{ product.name }}</div>
            <div style="font-size: 13px; color: #757575;">{{ product.category }}</div>
          </v-card-text>
           <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="primary" to="/product_list">
              ดูสินค้าทั้งหมด
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      // ข้อมูลสินค้าแนะนำ (Hardcoded)
      recommendedProducts: [
        {
          name: 'MNQ-02X White Tiger Cao Ren',
          category: 'แบรนด์:Motor Nuclear',
          price: '฿4,000',
          originalPrice: '฿5,000',
          image: 'https://img.lazcdn.com/g/ff/kf/S64b65e0f98fa4915a4773a0636fbb969G.jpg_360x360q75.jpg_.webp',
        },
        {
          name: 'Gon Freecss - Chimera Ant Arcs',
          category: 'แบรนด์:Tsume Art',
          price: '฿24,000',
          originalPrice: '฿30,000',
          image: 'https://i.pinimg.com/1200x/82/0c/fa/820cfa678cad15a22e7a5bade746e8d7.jpg',
        },
        {
          name: 'Megumi Fushiguro',
          category: 'แบรนด์:Space Realm Studio',
          price: '฿12,000',
          originalPrice: '฿15,000',
          image: 'https://i.pinimg.com/1200x/55/3c/31/553c31d25d8a9399b2b1e23031037653.jpg',
        },
        {
          name: 'King One Piece resin statue',
          category: 'แบรนด์:Resin Statue',
          price: '฿10,500',
          originalPrice: '฿15,000',
          image: 'https://i.pinimg.com/736x/a8/ca/99/a8ca99efbb6f2ecc090491b18df385fa.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-card {
  min-height: 370px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.v-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.v-img {
  background: #f5f5f5;
}
</style>