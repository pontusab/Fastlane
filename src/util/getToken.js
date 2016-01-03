export default function getToken() {
  return JSON.parse(localStorage.getItem('user'));
}
