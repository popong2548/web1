export default function ({ store, redirect, route }) {
  // ตรวจสอบว่าผู้ใช้ล็อกอินอยู่ และมี role เป็น 'admin'
  if (!store.state.auth.user || store.state.auth.user.role !== 'admin') {
    // ถ้าไม่ใช่ admin ให้ redirect ไปหน้าแรก
    return redirect('/');
  }
}