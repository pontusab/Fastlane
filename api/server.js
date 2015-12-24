import express from 'express';
import uber from './service/uber';
import Db from './service/db';
import config from '../src/config';

const { API_PORT, MY_TOKEN } = config;

const api = express();

api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

api.post('/auth', async (req, res) => {
  return res.json(await uber.authenticate(req.query.code));
});

/**
 * Ride request - Map
 * GET /v1/request/:request_id
 * @param {request_id}
 */
api.get('/request/:request_id/map', async (req, res) => {
  return res.json(await uber.getRequest(`v1/requests/${req.params.request_id}/map`, req.query));
});

/**
 * Ride request - Details
 * GET /v1/request/:request_id
 * @param {request_id}
 */
api.get('/request/:request_id', async (req, res) => {
  return res.json(await uber.getRequest(`v1/requests/${req.params.request_id}`, req.query));
});

/**
 * Product types
 * GET /v1/products
 */
api.get('/products', async (req, res) => {
  return res.json(await uber.getRequest('v1/products'));
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
  return res.json(await uber.getRequest('v1/estimates/time', req.query));
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
  return res.json(await uber.getRequest('v1/estimates/price', req.query));
});

const server = api.listen(API_PORT, () => {
  console.log(`Api started on port ${API_PORT}`);
});
