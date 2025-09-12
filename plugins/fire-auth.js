export default ({ store, app }) => {
  return new Promise((resolve) => {
    // onAuthStateChanged จะถูกเรียกเมื่อสถานะล็อกอินเปลี่ยน หรือเมื่อโหลดหน้าครั้งแรก
    app.$fire.auth.onAuthStateChanged(async (user) => {
      if (user) {
        // ถ้ามี user ให้เรียก action เพื่อดึงข้อมูล role จาก database
        await store.dispatch('onAuthStateChangedAction', { authUser: user });
      } else {
        // ถ้าไม่มี user ให้เคลียร์ข้อมูลใน store
        store.commit('ON_AUTH_STATE_CHANGED_MUTATION', { authUser: null });
      }
      // Resolve promise เพื่อให้ Nuxt ทำงานต่อไป
      return resolve();
    });
  });
};