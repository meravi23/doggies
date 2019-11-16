const assert = require('assert');
const DogModel = require('../models/dog');

describe('Deleting records', function () {

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


    it('Deletes one record from the db', function (done) {
        DogModel.findOneAndRemove({breed: 'mixed'}).then(function(){
            DogModel.findOne({breed: 'mixed'})
            // if response returns null, removal has been successful:
            .then(function(res){
                assert(res === null);
            }).catch(err => console.error(err));
        });
        done();
    });
});