import { createAction } from 'redux-actions';
import backend from '../service/backend';

export default createAction('GET_PRODUCTS', async (selectedLocation) => {
  const { location } = selectedLocation || {
    location: {
      lat: 1232,
      lng: 123,
    },
  };
  const { times: products } = await backend.products(location);

  return products;
});
