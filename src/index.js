const express = require('express');
const app = express();
const authController = require('./app/controllers/authController');
const projectController = require('./app/controllers/projectController');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use('/auth', authController);
app.use('/projects', projectController);


app.listen(3333);