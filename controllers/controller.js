// controller.js
const mongoose = require('mongoose');
const config = require('../config');
const besked = require('../models/beskeder');

mongoose.connect(config.databaseURI, {useNewUrlParser: true, useUnifiedTopology: true});

exports.createBesked = async function (navn, rum, tekst) {
    let max = await besked.findOne().sort('-nr').exec();
    let nr = max ? max.nr + 1 : 1;
    return besked.create({
        navn,
        rum,
        tekst,
        nr
    })
};

exports.getBesked = function (nr) {
    return besked.findById(nr).exec();
};



exports.getBeskeder = function () {
    return besked.find().exec();
};
exports.getRummet = function (rum) {
    return besked.find().where('rum').eq(rum).select('-_id -__v').exec();
}

exports.getRum = function () {
    return besked.find().distinct('rum').exec();
}
