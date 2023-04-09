const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL).then(data => {
    console.log("DB Connection successful");
}).catch(err => console.error(err));

module.exports = {};