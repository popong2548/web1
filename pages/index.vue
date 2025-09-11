<template>
  <v-container fluid>
    <div class="text-center mb-6">
      <h2 class="text-h4 font-weight-bold" style="color: #000000;">📦แนะนำสินค้า📦</h2>
      <p class="text-subtitle-1" style="color: #000000;">✨งานโมเดลสวยๆ✨</p>
      
    </div>
    <v-row>
      <v-col cols="12" md="3" v-for="(product, i) in products" :key="i">
        <v-card class="mx-auto" outlined hover>
          <v-img :src="product.image" height="200px" contain></v-img>
          <v-card-text>
            <div class="font-weight-bold" style="color: #d32f2f;">{{ product.price }}</div>
            <div style="color: #757575; font-size: 14px; text-decoration: line-through;">{{ product.originalPrice }}</div>
            <div style="color: #d32f2f; font-size: 14px; font-weight: bold;">{{ product.discount }}</div>
            <div class="mt-2 font-weight-bold">{{ product.name }}</div>
            <div style="font-size: 13px; color: #757575;">{{ product.category }}</div>
            <div style="font-size: 13px; color: #757575;">{{ product.detail }}</div>
            <div class="mt-2" style="color: #1976d2; font-size: 13px;">Extra 30% off at cart</div>
          </v-card-text>
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
      products: [
        {
          name: 'MNQ-02X White Tiger Cao Ren',
          category: 'แบรนด์:Motor Nuclear (โมเดลจากประเทศจีน)',
          detail: 'สเกล: 1/8',
          price: '฿4,000',
          originalPrice: '฿5,000 Original price',
          discount: '-20%',
          image: 'https://img.lazcdn.com/g/ff/kf/S64b65e0f98fa4915a4773a0636fbb969G.jpg_360x360q75.jpg_.webp',
        },
        {
          name: 'Gon Freecss - Chimera Ant Arcs',
          category: 'แบรนด์:Tsume Art',
          detail: 'สเกล: 1/4',
          price: '฿24,000',
          originalPrice: '฿30,000 Original price',
          discount: '-20%',
          image: 'https://i.pinimg.com/1200x/82/0c/fa/820cfa678cad15a22e7a5bade746e8d7.jpg',
        },
        {
          name: 'Megumi Fushiguro',
          category: 'แบรนด์:Space Realm Studio',
          detail: 'สเกล: 1/6',
          price: '฿12,000',
          originalPrice: '฿15,000 Original price',
          discount: '-20%',
          image: 'https://i.pinimg.com/1200x/55/3c/31/553c31d25d8a9399b2b1e23031037653.jpg',
        },
        {
          name: 'King One Piece resin statue',
          category: 'แบรนด์:Resin Statue',
          detail: 'สเกล: 1/4',
          price: '฿10,500',
          originalPrice: '฿15,000 Original price',
          discount: '-30%',
          image: 'https://i.pinimg.com/736x/a8/ca/99/a8ca99efbb6f2ecc090491b18df385fa.jpg',
        },
        {
          name: ' Samurai Revenge Goku',
          category: 'แบรนด์:Blue Sky Studio',
          detail: 'สเกล: 1/4',
          price: '฿10,500',
          originalPrice: '฿13,000 Original price',
          discount: '-20%',
          image: 'https://i.pinimg.com/1200x/9a/81/da/9a81daffef78710a2ea62dc38e49dcdf.jpg',
        },
        {
          name: 'Black Clover - Asta and Yuno',
          category: 'แบรนด์:YUMS Collectors',
          detail: 'สเกล: 1/6',
          price: '฿15,200',
          originalPrice: '฿19,000 Original price',
          discount: '-20%',
          image: 'https://i.pinimg.com/736x/c9/e2/98/c9e298f67948b9fe53310cd8c53c4e91.jpg',
        },
        {
          name: 'Ulquiorra Cifer Segunda Etapa',
          category: 'แบรนด์:BP Studio',
          detail: 'สเกล: 1/8',
          price: '฿10,500',
          originalPrice: '฿12,000 Original price',
          discount: '-10%',
          image: 'https://i.pinimg.com/736x/a1/fd/18/a1fd18aeaa38e4c7e2191412ae1f77f3.jpg',
        },
        {
          name: 'chigo vs Ulquiorra Elite Fandom Statues',
          category: 'แบรนด์:Figurama Collectors',
          detail: 'สเกล: 1/6',
          price: '฿32,000',
          originalPrice: '฿40,000 Original price',
          discount: '-20%',
          image: 'https://i.pinimg.com/1200x/ea/1a/9b/ea1a9b3302a5b229c2c9bb46f04bf204.jpg',
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

.v-divider {
  max-width: 150px;
  margin: auto;
  border-width: 2px;
  border-color: #3f51b5;
}
</style>