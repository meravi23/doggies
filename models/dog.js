const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema and model

const DogModel = new Schema({
    name: String,
    breed: String,
    chip: Number
});

const DogType = mongoose.model('dogtype', DogModel);

module.exports = DogType;