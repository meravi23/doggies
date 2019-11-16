const assert = require('assert');
const DogModel = require('../models/dog');
const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);


describe('saving records', function () {

    // making sure a connection to the db is established *prior* to testing
    before((done) => {
        mongoose.connect('mongodb://localhost/testing123', {
                useNewUrlParser: true
            })
            .then(console.log('connection has been made'))
            .catch('error', function (error) {
                console.log('Connection error:', error);
            });
        done();
    });

    // drop (delete) dog collection used for testing *before each test*
    beforeEach(function(done){
       mongoose.connection.collections.dogtypes.drop()
       .then(done());
    });

    // create tests
    it('saves a new dog in the db', function (done) {
        let dog = new DogModel({
            name: 'Celina',
            breed: 'mixed',
            chip: 123456789012345
        });

        dog.save().then(function () {
            assert(dog.isNew === false);
        });

        done();

    });

    // next test

});