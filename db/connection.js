const mongoose = require('mongoose');

// BpPA9eQcNqtYzhau
const isProduction = process.env.PORT;

if (isProduction) {
  mongoose.connect('mongodb+srv://jd:BpPA9eQcNqtYzhau@cluster0.fcshcmp.mongodb.net/?retryWrites=true&w=majority')
} else mongoose.connect('mongodb://127.0.0.1:27017/planets_api_db');


module.exports = mongoose.connection;