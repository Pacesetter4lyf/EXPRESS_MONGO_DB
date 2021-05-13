const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI || "mongodb+srv://megs:megs@cluster0.r46wh.mongodb.net/Zuri_database?retryWrites=true&w=majority";


module.exports = function(){
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connection successful')
    })
    .catch(err => {
        console.error('Database connection error')
    })
}
