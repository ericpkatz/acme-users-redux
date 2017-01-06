const express = require('express');
const path = require('path');
const _ = require('lodash');

const app = express();

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

app.use(require('body-parser').json());

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

const users = [];

app.get('/api/users', (req, res)=> res.send(users));

app.post('/api/users', (req, res)=> {
  const user = req.body;
  const userWithMaxId = _.maxBy(users, 'id');
  let maxId = userWithMaxId ? userWithMaxId.id : 0;
  user.id = ++maxId;
  users.push(user);
  res.send(user);
});

app.delete('/api/users/:id', (req, res)=> {
  _.remove(users, { id: req.params.id*1});
  res.sendStatus(200);
});

app.patch('/api/users/:id', (req, res)=> {
  const user = _.find(users, { id: req.params.id*1 });
  _.merge(user, req.body);
  res.send(user);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));


