const assert = require('assert');
const DogModel = require('../models/dog');

describe('Finding records', function () {

    let newDog;

    beforeEach(function (done) {
        newDog = new DogModel({
            name: 'Celina',
            breed: 'mixed',
            chip: 123456789012345
        });

        newDog.save().then(function () {
            assert(newDog.isNew === false);
        });
        done();
    });


    it('Finds one record in the db', function (done) {
        // find & findOne are asynchronous, therefore require resolving a response with .then

        DogModel.findOne({breed: 'mixed'})
            .then(function (res) {
                assert(res.breed === 'mixed');
            })
            .catch(err => console.error(err));

        done();
    });


    it('Finds one record in the db by id', function (done) {
        // find & findOne are asynchronous, therefore require resolving a response with .then

        DogModel.findOne({_id: newDog._id})
            .then(function (res) {
                assert(res._id.toString() === newDog._id.toString());
            })
            .catch(err => console.error(err));

        done();
    });

});