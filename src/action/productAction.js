import { createAction } from 'redux-actions';
import backend from '../service/backend';

export default createAction('GET_PRODUCTS', async (selectedLocation) => {
  const { location } = selectedLocation || await backend.lookup();
  const { times: products } = await backend.products(location);

  return {
    products,
    location,
  };
});
