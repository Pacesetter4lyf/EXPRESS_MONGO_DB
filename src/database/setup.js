const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI ;


module.exports = function(){
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connection successful')
    })
    .catch(err => {
        console.error('Database connection error')
    })
}
