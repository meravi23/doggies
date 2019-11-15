const mocha = require('mocha');
const assert = require('assert');
const DogModel = require('../models/dog');

describe('saving records', function() {
    
    // create tests
    it ('saves a new dog in the db', function(done) {
        let dog = new DogModel({
            name: 'Celina',
            breed: 'mixed',
            chip: 123456789012345
        });

        dog.save().then(function(){
            assert(dog.isNew === false);
        });

        done();

    }); 
        
    // next test

});