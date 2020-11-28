const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect( process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('Connected to db!'))
.catch((err) => console.log("Could not connect to db", err));

mongoose.Promise = global.Promise;

module.exports = mongoose;
