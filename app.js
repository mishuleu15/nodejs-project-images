const express = require('express');
const fs = require('fs');

const app = express();

const PORT = 8000;

const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);

app.get('/', (req, res) => {
  res.status(200).send(tempCard);
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}!`);
});
