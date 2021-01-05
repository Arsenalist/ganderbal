/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { getAllNames, getName } from './app/names_repository';

const app = express();

app.get('/api/names', (req, res) => {
  res.send(getAllNames());
});

app.get('/api/names/:id', (req, res) => {
  res.send(getName(req.params.id));
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
