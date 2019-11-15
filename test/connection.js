const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);


//connect to mongodb:
mongoose.connect('mongodb://localhost/testing123',  { useNewUrlParser: true });

//listen to connection ("once" is an event listener same as element.on('click', function()))
mongoose.connection.once('open', function(){
    console.log('connection has been made');
}).on('error', function(error){
    console.log('Connection error:', error);
});