export default function ({ store, route, redirect }) {
  const user = store.state.auth.user;
  const loggedIn = store.state.auth.loggedIn;
  const isAdminRoute = route.path.startsWith('/admin');
  const isGuestRoute = route.path === '/login' || route.path === '/register';

  // ถ้าล็อกอินแล้ว แต่พยายามเข้าหน้า login/register
  if (loggedIn && isGuestRoute) {
    return redirect('/');
  }

  // ส่วนของ Admin
  if (isAdminRoute) {
    if (!loggedIn) {
      return redirect('/login');
    }
    if (user && user.role !== 'admin') {
      return redirect('/'); // ไม่ใช่ admin ให้ไปหน้าแรก
    }
    route.meta.layout = 'admin';
    return;
  }

  // ส่วนของผู้ใช้ทั่วไป
  if (loggedIn) {
    route.meta.layout = 'default';
  } else {
    route.meta.layout = 'guest';
  }
}