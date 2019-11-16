const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);


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