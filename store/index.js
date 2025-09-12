export const state = () => ({
  auth: {
    user: null,
    loggedIn: false, // เพิ่ม state loggedIn
  },
});

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser, claims }) {
    if (authUser) {
      const { uid, email } = authUser;
      state.auth.user = { uid, email, role: null };
      state.auth.loggedIn = true;
    } else {
      state.auth.user = null;
      state.auth.loggedIn = false;
    }
  },
  setUserRole(state, role) {
    if (state.auth.user) {
      state.auth.user.role = role;
    }
  }
};

export const actions = {
  async onAuthStateChangedAction({ commit, dispatch }, { authUser, claims }) {
    return new Promise((resolve) => {
      commit('ON_AUTH_STATE_CHANGED_MUTATION', { authUser, claims });

      if (authUser) {
        try {
          // ยิง API ไปยัง PHP เพื่อขอ role ของ user
          this.$axios.$post('/api/get_user_role.php', { email: authUser.email }).then(response => {
            if (response.success && response.role) {
              commit('setUserRole', response.role);
            } else {
              commit('setUserRole', 'customer'); // ถ้าไม่เจอ ให้เป็น customer
            }
            resolve();
          });
        } catch (error) {
          console.error("Error fetching user role:", error);
          commit('setUserRole', 'customer');
          resolve();
        }
      } else {
        resolve();
      }
    });
  }
};