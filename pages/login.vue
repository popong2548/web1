// ... (ส่วน template เหมือนเดิม) ...

<script>
export default {
  name: 'LoginPage',
  layout: 'empty',
  data() {
    // ... (ส่วน data เหมือนเดิม) ...
  },
  methods: {
    async submitLogin() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.error = null;

        try {
          const { user } = await this.$fire.auth.signInWithEmailAndPassword(
            this.email,
            this.password
          );

          await this.$store.dispatch('onAuthStateChangedAction', { authUser: user });
          
          if (this.$store.state.auth.user && this.$store.state.auth.user.role === 'admin') {
            this.$router.push('/admin/management'); // <<< แก้ไข redirect ที่นี่
          } else {
            this.$router.push('/');
          }

        } catch (err) {
          // ... (ส่วน catch error เหมือนเดิม) ...
        } finally {
          this.loading = false;
        }
      }
    },
  }
};
</script>

<style scoped>
.login-container.dark-theme {
  min-height: 100vh;
  background: #2b2828;
}
.login-bg {
  background: url('https://img00.deviantart.net/b876/i/2013/061/9/a/ninja_frog_by_gvc060905-d5wrthm.jpg') center center no-repeat;
  background-size: cover;
  min-height: 100vh;
}
.login-form-wrapper {
  width: 100%;
  max-width: 400px;
}
.dark-card {
  background: #0c0e0e !important;
  color: #fff !important;
}
.v-toolbar {
  background: #ffffff !important;
}
.v-card__text, .v-card__actions {
  color: #fff !important;
}
.v-input input, .v-label {
  color: #fff !important;
}
@media (max-width: 960px) {
  .login-bg {
    min-height: 200px;
    height: 200px;
  }
}
</style>