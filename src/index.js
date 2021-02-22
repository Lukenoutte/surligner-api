const express = require('express');
const app = express();
const authController = require('./app/controllers/authController');
const projectController = require('./app/controllers/projectController');
const indexController = require('./app/controllers/indexController');
const cors = require('cors');
const https = require('https');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use('/', indexController);
app.use('/auth', authController);
app.use('/projects', projectController);

try{
var privateKey  = fs.readFileSync('/etc/ssl/private/apache-selfsigned.key', 'utf8');
var certificate = fs.readFileSync('/etc/ssl/certs/apache-selfsigned.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

const httpsServer = https.createServer(credentials, app);


httpsServer.listen(8443), () => {
    console.log('HTTPS Server running on port 8443');
};

}catch(err){
console.log(err);
}


