export const state = () => ({
  items: [],
  itemCount: 0,
});

export const mutations = {
  setCart(state, items) {
    state.items = items;
    state.itemCount = items.reduce((count, item) => count + item.quantity, 0);
  },
  addItem(state, item) {
    state.items.push(item);
    state.itemCount += item.quantity;
  },
  removeItem(state, productId) {
    const index = state.items.findIndex(item => item.product_id === productId);
    if (index !== -1) {
      state.itemCount -= state.items[index].quantity;
      state.items.splice(index, 1);
    }
  },
  updateItemQuantity(state, { productId, quantity }) {
    const item = state.items.find(item => item.product_id === productId);
    if (item) {
      state.itemCount = state.itemCount - item.quantity + quantity;
      item.quantity = quantity;
    }
  },
};

export const actions = {
  async fetchCart({ commit, rootState }) {
    if (!rootState.auth.user) return;
    const userId = rootState.auth.user.id; // สมมติว่ามี id ของ user ใน store
    try {
      const { data } = await this.$axios.get(`/cart_api.php?customer_id=${userId}`);
      commit('setCart', data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  },
  async addToCart({ dispatch }, product) {
    // Implement API call to add item to cart
    console.log('Added to cart:', product);
    await dispatch('fetchCart'); // Refresh cart after adding
  },
  async removeFromCart({ dispatch }, productId) {
    // Implement API call to remove item from cart
    console.log('Removed from cart:', productId);
    await dispatch('fetchCart'); // Refresh cart after removing
  },
  async updateQuantity({ dispatch }, { productId, quantity }) {
    // Implement API call to update quantity
    console.log('Updated quantity:', productId, quantity);
    await dispatch('fetchCart'); // Refresh cart after updating
  },
};

export const getters = {
  cartItems: state => state.items,
  cartItemCount: state => state.itemCount,
  cartTotalPrice: state => {
    return state.items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  },
};