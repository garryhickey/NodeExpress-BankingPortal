const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const accountData = fs.readFileSync('src/json/accounts.json', 'utf-8');
const accounts = JSON.parse(accountData);
app.get('/', (req, res) => res.render('index', {title: 'Index' }));

app.listen(3000, () => console.log('PS project running on port 3000'));