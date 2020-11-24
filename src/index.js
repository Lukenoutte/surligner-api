const express = require('express');
const app = express();
const authController = require('./controllers/authController');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/auth', authController);

app.listen(3333);