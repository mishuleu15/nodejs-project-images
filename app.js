const express = require('express');
const fs = require('fs');

const app = express();

app.use('/img', express.static('./img'));

const PORT = 8000;

const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);

const loginForm = fs.readFileSync(
  `${__dirname}/templates/login-form.html`,
  'utf-8'
);

const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');

function replaceTemplate(temp, element) {
  const { title, login, submit } = element;
  let output = temp.replace(/{%TITLE%}/g, title);
  output = output.replace(/{%LOGIN%}/g, login);
  output = output.replace(/{%SUBMIT%}/g, submit);
  return output;
}

const dataObj = JSON.parse(data);

app.get('/', (req, res) => {
  // console.log(req.params.id);
  const cardsHtml = dataObj.map((el) => replaceTemplate(tempCard, el)).join('');
  res.status(200).send(cardsHtml);
});

app.get('/login', (req, res) => {
  res.status(200).send(loginForm);
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}!`);
});
