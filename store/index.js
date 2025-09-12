export const state = () => ({
  auth: {
    user: null,
  },
});

export const mutations = {
  // Mutation นี้จะถูกเรียกโดย @nuxtjs/firebase
  ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser, claims }) {
    if (authUser) {
      const { uid, email } = authUser;
      state.auth.user = {
        uid,
        email,
        // *** สำคัญ: claims.role จะทำงานเมื่อตั้งค่า Custom Claims ใน Firebase Functions ***
        // สำหรับตอนนี้ เราจะใช้ค่าจากฐานข้อมูล PHP ที่เราจะ fetch มาตอน login แทน
        role: null // ตั้งเป็น null ก่อน
      };
    } else {
      state.auth.user = null;
    }
  },
  // Mutation สำหรับตั้งค่า role ของ user
  setUserRole(state, role) {
    if (state.auth.user) {
      state.auth.user.role = role;
    }
  }
};

export const actions = {
  // Action ที่จะถูกเรียกหลังจาก login สำเร็จ
  async onAuthStateChangedAction({ commit, dispatch }, { authUser, claims }) {
    commit('ON_AUTH_STATE_CHANGED_MUTATION', { authUser, claims });

    if (authUser) {
      try {
        // ยิง API ไปยัง PHP เพื่อขอ role ของ user
        const response = await this.$axios.$post('/api/get_user_role.php', { email: authUser.email });
        if (response.success && response.role) {
          commit('setUserRole', response.role);
        } else {
          commit('setUserRole', 'customer'); // ถ้าไม่เจอ ให้เป็น customer
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
        commit('setUserRole', 'customer');
      }
    }
  }
};