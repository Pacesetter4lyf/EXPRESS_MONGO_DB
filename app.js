
const express = require('express')
let mongoose = require('mongoose');
const app = express()
const port = 3000

const uri = "mongodb+srv://megs:megs@cluster0.r46wh.mongodb.net/Zuri_database?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Database connection successful')
})
.catch(err => {
    console.error('Database connection error')
})

let basicSchema = new mongoose.Schema({
    email: String,
    firstName: String, 
    lastName: String,
    age: Number,
    hasCar: Boolean,
    country: String
})

let person =  mongoose.model('basic', basicSchema)

app.use(express.json())
app.post('/persons', function (req, res) {
    
    //console.log(req)
    person.create( {    
        email: req.body.email,
        firstName: req.body.firstName, 
        lastName: req.body.lastName,
        age: req.body.age,
        hasCar: req.body.hasCar,
        country: req.body.country
    }, 
    function (err, newperson) {
        if (err) return res.status(500).json({Message: err});
        return res.status(200).json({message: "new human created", newperson})
    });

})

app.get('/persons', function (req, res) {
    person.find({}, 
        function(err, allperson){
            if (err) return res.status(500).json({Message: err});
            return res.status(200).json({message: "Find below all data", allperson})
        })
})


app.get('/persons/:id', function (req, res) {
    person.findById((req.params.id), (err, person) => {
            if (err) return res.status(500).json({Message: err});
            else if(!person ) return  res.status(404).json({message: "Book not found"})
            else return res.status(200).json({person}) ; 
        })
})

app.put('/persons/:id', function (req, res) {
    person
  .findByIdAndUpdate(
    req.params.id, 
    {
        email: req.body.email,
        firstName: req.body.firstName, 
        lastName: req.body.lastName,
        age: req.body.age,
        hasCar: req.body.hasCar,
        country: req.body.country,
    },
    {
        "useFindAndModify": false
    },
    (err, person) => {
        if (err) return res.status(500).json({Message: err});
        else if(!person ) return  res.status(404).json({message: "Book not found"})
        else person.save((err, savedperson) => {
            if (err) return res.status(400).json({Message: err});
            else return res.status(200).json({"Message": "Book saved successfully"}) ; 
        })
    })
})


app.delete('/persons/:id', function (req, res) {
    person
  .findByIdAndDelete(
    req.params.id, 

    (err, person) => {
        if (err) return res.status(500).json({Message: err});
        else if(!person ) return  res.status(404).json({message: "Book not found"})
        else return res.status(200).json({"Message": "Book deleted successfully"}) ; 
    })
})


app.get('/*', (req, res) => {
    res.json({message: "Page not found"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
