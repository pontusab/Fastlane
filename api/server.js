import express from 'express';
import uber from './service/uber';
import config from '../src/config';

const { API_PORT, MY_TOKEN } = config;

const api = express();

api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

api.post('/auth', async (req, res) => {
  const { code } = req.query;

  return res.json(await uber.authenticate(code));
});

api.get('/me', async (req, res) => {
  return res.json(await uber.getRequest('v1/me', req.query));
});

api.get('/history', async (req, res) => {
  return res.json(await uber.getRequest('v1.2/history', req.query));
});

api.get('/request/:id/map', async (req, res) => {
  return res.json(await uber.getRequest(`v1/requests/${req.params.id}/map`, req.query));
});

api.get('/products/:id?', async (req, res) => {
  const method = req.params.id ? ('v1/products/' + req.params.id) : 'v1/products';
  return res.json(await uber.getRequest(method, req.query));
});

const server = api.listen(API_PORT, () => {
  console.log('api listening to port:', API_PORT);
});
