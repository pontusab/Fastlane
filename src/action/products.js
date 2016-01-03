import { createAction } from 'redux-actions';
import backend from '../service/backend';

export default createAction('GET_PRODUCTS', async (selectedLocation) => {
  // const { location } = selectedLocation || await backend.lookup();
  const { location } = selectedLocation || { location: { lat: '59.3294', lng: '18.0686' } };
  const { products } = await backend.products(location);

  return products;
});
