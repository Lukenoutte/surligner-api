const express = require('express');
const app = express();
const authController = require('./app/controllers/authController');
const projectController = require('./app/controllers/projectController');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/auth', authController);
app.use('/projects', projectController);

app.listen(3333);