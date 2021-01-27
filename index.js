const express = require('express')
const bodyParser = require('body-parser');
const fs = require('fs')
const ejs = require('ejs')
const session = require('express-session');

const saltRounds = 10;

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({ secret: 'ssshhhhh' }));

app.get('/', (req, res) => {

    res.render('home.ejs', {

    })
})

    app.listen(3000, () => console.log('Server running on port 3000!'))