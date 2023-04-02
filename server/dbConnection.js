const mongoose = require('mongoose');
const DB_URL = 'mongodb+srv://admin:admin@cluster0.xd5afko.mongodb.net/test'

mongoose.connect(DB_URL).then(data => {
    console.log("DB Connection successful");
}).catch(err => console.error(err));

module.exports = {};