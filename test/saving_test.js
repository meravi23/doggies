const assert = require('assert');
const DogModel = require('../models/dog');
const mongoose = require('mongoose');


describe('Saving records', function () {
    // drop (delete) dog collection used for testing *before each test*
    beforeEach(function(done){
       mongoose.connection.collections.dogtypes.drop()
       .then(done());
    });

    // create tests
    it('saves a new dog in the db', function (done) {
        let newDog = new DogModel({
            name: 'Celina',
            breed: 'mixed',
            chip: 123456789012345
        });

        newDog.save().then(function () {
            assert(newDog.isNew === false);
        });

        done();

    });

    // next test

});