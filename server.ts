import * as http from 'http';
import * as path from 'path';
import * as cors from 'cors';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { readFileSync, writeFileSync } from 'fs';

const app = express();

app.use(cors());
app.use(bodyParser.json());

const todos = express();

todos.get('/', (_, res) => {
  const data = JSON.parse(readFileSync(path.join(process.cwd(), 'data.json'), 'utf8'));
  res.json(data);
})

todos.put('/', (req, res) => {
  const fileData = JSON.parse(readFileSync(path.join(process.cwd(), 'data.json'), 'utf8'))
  fileData.push(req.body.data)
  writeFileSync(path.join(process.cwd(), 'data.json'), JSON.stringify(fileData), 'utf-8')
  res.json(fileData)
})

todos.delete('/:index', (req, res) => {
  const fileData = JSON.parse(readFileSync(path.join(process.cwd(), 'data.json'), 'utf8'))
  fileData.splice(+req.params.index, 1)
  writeFileSync(path.join(process.cwd(), 'data.json'), JSON.stringify(fileData), 'utf-8')
  res.json(fileData)
})

app.use('/api/todos', todos);

const httpServer = http.createServer(app);
const host = '0.0.0.0'
const port = 8888
httpServer.listen({ host, port }, () => console.log(`Listening on ${host}:${port}`));
