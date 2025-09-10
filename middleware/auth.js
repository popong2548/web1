// middleware/auth.js
export default function ({ app, store, redirect }) {
  // ถ้าผู้ใช้ไม่ได้เข้าสู่ระบบ
  if (!app.$fire.auth.currentUser) {
    return redirect('/login') // พาไปหน้า Login
  }
}