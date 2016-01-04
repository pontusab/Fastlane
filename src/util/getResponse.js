import Promise from 'bluebird';

export default function getResponse(response) {
  return Promise.resolve(response.json())
    .then((res) => res);
}
