export default function authToken() {
  const { access_token } = JSON.parse(localStorage.getItem('user'));

  return access_token;
}
