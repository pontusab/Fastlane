import path from 'path';
import express from 'express';
import api from './api';
import { PORT } from '../config';

const server = express();

// Api endpoints
server.use('/api', api());

// Serve static files
server.use('/public', express.static('public'));

// Serve bundle
server.get('/bundle', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/bundle.js'));
});

// Serve html for react
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
