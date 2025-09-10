<template>
  <div>
    <h1>การแสดงข้อความแบบเรียลไทม์ (พร้อมบันทึกใน Local Storage)</h1>

    <v-text-field
      v-model="message"
      label="พิมพ์ข้อความของคุณที่นี่"
      outlined
      clearable
      @input="saveToLocalStorage"  ></v-text-field>

    <p>
      คุณกำลังพิมพ์: <strong>{{ message }}</strong>
    </p>

    <v-btn @click="clearMessage">ล้างข้อความ</v-btn>
    <v-btn @click="loadFromLocalStorage" class="ml-2">โหลดข้อความที่บันทึกไว้</v-btn>
  </div>
</template>

<script>
export default {
  name: 'RealtimeInputExample',
  data() {
    return {
      message: '' // นี่คือตัวแปรที่เราจะใช้เก็บข้อความจาก input
    }
  },
  mounted() {
    // เมื่อ component ถูก mount (โหลดเสร็จสมบูรณ์)
    // เราจะพยายามโหลดข้อมูลจาก Local Storage
    this.loadFromLocalStorage();
  },
  methods: {
    saveToLocalStorage() {
      // บันทึกค่า 'message' ลงใน Local Storage
      // 'myInputMessage' คือ key ที่เราใช้ในการเก็บข้อมูล
      // JSON.stringify() ใช้แปลงข้อมูลให้เป็น string ก่อนเก็บ
      if (process.client) { // ตรวจสอบให้แน่ใจว่าโค้ดนี้รันในฝั่ง client เท่านั้น
        localStorage.setItem('myInputMessage', JSON.stringify(this.message));
        console.log('ข้อความถูกบันทึกใน Local Storage แล้ว');
      }
    },
    loadFromLocalStorage() {
      // โหลดค่าจาก Local Storage
      if (process.client) {
        const savedMessage = localStorage.getItem('myInputMessage');
        if (savedMessage) {
          // JSON.parse() ใช้แปลง string กลับเป็น object (ในที่นี้คือ string ธรรมดา)
          this.message = JSON.parse(savedMessage);
          console.log('โหลดข้อความจาก Local Storage แล้ว:', this.message);
        }
      }
    },
    clearMessage() {
      this.message = ''; // ล้างข้อความใน data
      if (process.client) {
        localStorage.removeItem('myInputMessage'); // ลบข้อมูลออกจาก Local Storage
        console.log('ข้อความถูกลบจาก Local Storage แล้ว');
      }
    }
  }
}
</script>

<style scoped>
/* ... (CSS เหมือนเดิม) ... */
</style>