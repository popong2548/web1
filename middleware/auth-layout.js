export default function ({ store, route, redirect }) {
  const user = store.state.auth.user;
  const isAdminRoute = route.path.startsWith('/admin');

  if (isAdminRoute) {
    if (user && user.role === 'admin') {
      route.meta.layout = 'admin';
    } else if (user) {
      return redirect('/');
    } else {
      return redirect('/login');
    }
  } else if (user) {
    route.meta.layout = 'default';
  } else {
    route.meta.layout = 'guest';
  }
}