import Promise from 'bluebird';
import qs from 'query-string';
import fetch from 'node-fetch';

export default {
  lookup() {
    const query = qs.stringify({
      browser: 'chromium',
      sensor: true,
    });

    return Promise.resolve(fetch(`https://maps.googleapis.com/maps/api/browserlocation/json?${query}`)
      .then((res) => res.json()));
  },
};
