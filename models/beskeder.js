const mongoose = require('mongoose');

const besked = new mongoose.Schema({
    navn: String,
    rum: String,
    tekst: String,
    nr: Number
});

module.exports = mongoose.model('Besked', besked);
