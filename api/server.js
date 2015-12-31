import express from 'express';
import config from '../config';
import uber from './service/uber-proxy';

const { API_PORT, DOMAIN } = config;

const api = express();

api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', DOMAIN);
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

/**
 * Authenticate
 * GET /oauth/v2/authorize
 * @param {code}
 */
api.post('/auth', async (req, res) => {
  return res.json(await uber.authenticate(req.query.code));
});

/**
 * Product types
 * GET /v1/products
 * @param {latitude}
 * @param {longitude}
 */
api.get('/products', async (req, res) => {
  return res.json(await uber.request('v1/products', req.query));
});

/**
 * Time estimates
 * GET /v1/estimates/time
 * @param {start_latitude}
 * @param {start_longitude}
 * @param {customer_uuid?}
 * @param {product_id?}
 */
api.get('/estimates/time', async (req, res) => {
  return res.json(await uber.request('v1/estimates/time', req.query));
});

/**
 * Price estimates
 * GET /v1/estimates/price
 * @param {start_latitude}
 * @param {start_longitude}
 * @param {end_latitude}
 * @param {end_longitude}
 */
api.get('/estimates/price', async (req, res) => {
  return res.json(await uber.request('v1/estimates/price', req.query));
});

/**
 * Ride request - Map
 * GET /v1/request
 * @param {request_id}
 */
api.get('/request/:request_id/map', async (req, res) => {
  return res.json(await uber.request(`v1/requests/${req.params.request_id}/map`, req.query));
});

/**
 * Ride request
 * POST /v1/request
 * @param {start_latitude}
 * @param {start_longitude}
 * @param {product_id?}
 * @param {start_nickname?}
 * @param {start_address?}
 * @param {end_latitude?}
 * @param {end_longitude?}
 * @param {end_nickname?}
 * @param {end_address?}
 * @param {surge_confirmation_id?}
 */
api.post('/request', async (req, res) => {
  return res.json(await uber.request(`v1/requests`, req.query));
});

/**
 * Ride request - Details
 * GET /v1/request
 * @param {request_id}
 */
api.get('/request/:request_id', async (req, res) => {
  return res.json(await uber.request(`v1/requests/${req.params.request_id}`, req.query));
});

/**
 * Ride request - Details
 * DELETE /v1/request
 * @param {request_id}
 */
api.delete('/request/:request_id', async (req, res) => {
  return res.json(await uber.request(`v1/requests/${req.params.request_id}`, req.query));
});

const server = api.listen(API_PORT, () => {
  console.log(`Api started on port ${API_PORT}`);
});
