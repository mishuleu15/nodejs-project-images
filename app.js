const express = require('express');
const fs = require('fs');

const app = express();

const PORT = 8000;

const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);

const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');

const dataObj = JSON.parse(data);
console.log(dataObj);

app.get('/', (req, res) => {
  res.status(200).send(tempCard);
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}!`);
});
