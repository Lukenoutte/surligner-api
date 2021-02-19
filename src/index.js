const express = require('express');
const app = express();
const authController = require('./app/controllers/authController');
const projectController = require('./app/controllers/projectController');
const cors = require('cors');
const https = require('https');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use('/auth', authController);
app.use('/projects', projectController);

const httpsServer = https.createServer({
    key: fs.readFileSync('/etc/ssl/certs/apache-selfsigned.crt'),
    cert: fs.readFileSync('/etc/ssl/private/apache-selfsigned.key'),
  }, app);
  
app.listen(3333);

httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});