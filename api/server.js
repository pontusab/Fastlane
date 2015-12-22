import express from 'express';
import uber from './uber';
import config from '../src/config';

const { API_PORT, MY_TOKEN } = config;

const api = express();

api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

api.get('/auth', async (req, res) => {
  const { code } = req.query;

  return res.json(await uber.authenticate(code));
});

api.get('/me', async (req, res) => {
  const { token } = req.query;

  return res.json(await uber.getRequest('me', MY_TOKEN));
});

api.get('/products/:id?', async (req, res) => {
  const method = req.params.id ? ('products/' + req.params.id) : 'products';
  return res.json(await uber.getRequest(method, MY_TOKEN, req.query));
});

const server = api.listen(API_PORT, () => {
  console.log('api listening to port:', API_PORT);
});
