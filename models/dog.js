const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema and model

const DogClass = new Schema({
    name: String,
    breed: String,
    chip: Number
});

const DogType = mongoose.model('dogtype', DogClass);

module.exports = DogType;