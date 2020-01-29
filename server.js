const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.use(express.static('public'));

app.listen(process.env.PORT || 8080, () => console.log('All is OK!'));
