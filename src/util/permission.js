export function handlePermission(params) {
  const user = localStorage.getItem('user');
  const start = params.location.pathname !== '/';

  if (user && !start) {
    return window.location.replace('/search');
  } else if (!user && start) {
    return window.location.replace('/?unauthorized=true');
  }
}
