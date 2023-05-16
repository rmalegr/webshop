//crear una api rest

const express = require('express');

const app = express();

app.use(express.json());

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.use(require('./routes/index'));

app.listen(3000);

app.get('/', (req, res) => {
    res.send('Hola mundo');

}

);

console.log('Server on port', 3000);

//npm i express

//npm i nodemon --save-dev

//npm i cors


