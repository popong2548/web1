<template>
  <v-container fill-height fluid class="login-container dark-theme">
    <v-row no-gutters>
      <v-col cols="12" md="6" class="login-bg"></v-col>
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="login-form-wrapper">
          <div class="text-center mb-5">
            <v-img src="https://colorlib.com/etc/lf/Login_v4/images/logo.png" contain max-width="120" class="mx-auto mb-2" />
          </div>
          <v-card class="elevation-12 dark-card" dark>
            <v-toolbar color="grey darken-4" dark flat>
              <v-toolbar-title>เข้าสู่ระบบ</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  label="อีเมล"  name="email"
                  prepend-icon="mdi-account"
                  type="email" v-model="email" :rules="[rules.required, rules.email]"
                  required
                  color="primary"
                  dark
                ></v-text-field>

                <v-text-field
                  label="รหัสผ่าน"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model="password"
                  :rules="[rules.required]"
                  required
                  color="primary"
                  dark
                ></v-text-field>

                <v-alert
                  v-if="error"
                  type="error"
                  dense
                  outlined
                  class="mt-3"
                  dark
                >
                  {{ error }}
                </v-alert>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="dark" @click="submitLogin" :loading="loading" dark>เข้าสู่ระบบ</v-btn>
            </v-card-actions>
          </v-card>
          <div class="mt-4 text-center">
            <span class="grey--text text--lighten-3">ยังไม่มีบัญชี?</span>
            <v-btn text small to="/register" color="primary">สมัครสมาชิกที่นี่</v-btn>
            <br />
            <v-btn text small to="/" color="grey lighten-3">&lt; กลับหน้าแรก</v-btn>
          </div>
          </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'empty',
  data() {
    return {
      valid: true,
      email: '',
      password: '',
      loading: false,
      error: null,
      rules: {
        required: value => !!value || 'จำเป็นต้องกรอกข้อมูล',
        email: value => /.+@.+\..+/.test(value) || 'รูปแบบอีเมลไม่ถูกต้อง',
      }
    };
  },
  methods: {
    async submitLogin() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.error = null;

        try {
          await this.$fire.auth.signInWithEmailAndPassword(
            this.email,
            this.password
          );

          this.$router.push('/'); 

        } catch (err) {
          console.error('Firebase Login error:', err);
          switch (err.code) {
            case 'auth/invalid-login-credentials':
            case 'auth/user-not-found':
            case 'auth/wrong-password':
              this.error = 'อีเมลหรือรหัสผ่านไม่ถูกต้อง';
              break;
            case 'auth/invalid-email':
              this.error = 'รูปแบบอีเมลไม่ถูกต้อง';
              break;
            default:
              this.error = 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ: ' + err.message;
          }
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