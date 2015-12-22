import express from 'express';
import uber from './uber';
import config from '../src/config';

const { API_PORT } = config;

const api = express();

api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

api.get('/auth', async (req, res) => {
  const code = req.query.code;
  return res.json(await uber.authenticate(code));
});

const server = api.listen(API_PORT, () => {
  console.log('api listening to port:', API_PORT);
});
