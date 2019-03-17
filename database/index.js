const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/form';

const db = mongoose.connect(mongoUri);

module.exports = db;
