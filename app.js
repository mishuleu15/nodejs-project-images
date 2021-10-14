const express = require('express');
const fs = require('fs');

const app = express();

const PORT = 8000;

const replaceTemplate = (temp, element) => {
  let output = temp.replace(/{%TITLE%}/g, element.title);
  return output;
};

const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);

const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');

const dataObj = JSON.parse(data);

app.get('/', (req, res) => {
  const cardsHtml = dataObj.map((el) => replaceTemplate(tempCard, el)).join('');
  const output = tempCard.replace('{%TITLE%}', cardsHtml);
  res.status(200).send(output);
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}!`);
});
