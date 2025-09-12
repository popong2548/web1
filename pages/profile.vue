<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title class="text-h5">
            แก้ไขข้อมูลส่วนตัว
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field
                v-model="userProfile.email"
                label="อีเมล"
                readonly
                disabled
                prepend-icon="mdi-email"
              ></v-text-field>

              <v-text-field
                v-model="userProfile.first_name"
                label="ชื่อจริง"
                :rules="[rules.required]"
                prepend-icon="mdi-account"
              ></v-text-field>

              <v-text-field
                v-model="userProfile.last_name"
                label="นามสกุล"
                :rules="[rules.required]"
                prepend-icon="mdi-account"
              ></v-text-field>

               <v-text-field
                v-model="userProfile.phone_number"
                label="เบอร์โทรศัพท์"
                prepend-icon="mdi-phone"
              ></v-text-field>

              <v-alert v-if="successMessage" type="success" dense>
                {{ successMessage }}
              </v-alert>
              <v-alert v-if="errorMessage" type="error" dense>
                {{ errorMessage }}
              </v-alert>

            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              :loading="loading"
              :disabled="!valid"
              @click="updateProfile"
            >
              บันทึกข้อมูล
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProfilePage',
  middleware: 'auth', // ป้องกันไม่ให้เข้าหน้านี้หากยังไม่ Login
  data() {
    return {
      valid: true,
      loading: false,
      successMessage: '',
      errorMessage: '',
      userProfile: {
        email: '',
        first_name: '',
        last_name: '',
        phone_number: '',
      },
      rules: {
        required: value => !!value || 'กรุณากรอกข้อมูล',
      },
    };
  },
  computed: {
    ...mapState({
      user: state => state.auth.user,
    }),
  },
  async mounted() {
    // โหลดข้อมูลผู้ใช้เมื่อเข้ามาหน้านี้
    if (this.user && this.user.email) {
      try {
        // คุณจะต้องสร้าง API endpoint นี้ในฝั่ง PHP
        const response = await this.$axios.$get(`/api/get_user_profile.php?email=${this.user.email}`);
        if (response.success) {
          this.userProfile = response.data;
        } else {
          this.errorMessage = "ไม่สามารถโหลดข้อมูลผู้ใช้ได้";
        }
      } catch (error) {
        this.errorMessage = "เกิดข้อผิดพลาดในการเชื่อมต่อ";
        console.error(error);
      }
    }
  },
  methods: {
    async updateProfile() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.successMessage = '';
        this.errorMessage = '';
        try {
          // คุณจะต้องสร้าง API endpoint นี้ในฝั่ง PHP
          const response = await this.$axios.post('/api/update_user_profile.php', this.userProfile);
          if (response.data.success) {
            this.successMessage = "บันทึกข้อมูลสำเร็จ!";
          } else {
            this.errorMessage = response.data.message || "เกิดข้อผิดพลาดในการบันทึกข้อมูล";
          }
        } catch (error) {
          this.errorMessage = "เกิดข้อผิดพลาดในการเชื่อมต่อ";
          console.error(error);
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>