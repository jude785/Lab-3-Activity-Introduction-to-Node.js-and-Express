const express = require('express');
const app = express();
const port = 3000;

const items = ['Apple', 'Banana', 'Orange'];

app.use(express.static('public'));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const newItem = req.body.item;
  items.push(newItem);
  res.join(items)
});

app.listen(port, () => {  
    console.log(`Example app listening at http://localhost:${port}`);
});