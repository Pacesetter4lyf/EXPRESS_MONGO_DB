const person = require("../models/person")

exports.createNewPerson = function(req, res){
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
    })
}

exports.fetchPersons = function (req, res) {
    person.find({}, 
        function(err, allperson){
            if (err) return res.status(500).json({Message: err});
            return res.status(200).json({message: "Find below all data", allperson})
        })
}

exports.fetchSinglePerson= function(req, res){
    person.findById((req.params.id), (err, person) => {
        if (err) return res.status(500).json({Message: err});
        else if(!person ) return  res.status(404).json({message: "Book not found"})
        else return res.status(200).json({person}) ; 
    })
}

exports.updateSinglePerson = function (req, res){
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
}

exports.deleteSinglePerson = function (req, res){
    person
    .findByIdAndDelete(
      req.params.id, 
  
      (err, person) => {
          if (err) return res.status(500).json({Message: err});
          else if(!person ) return  res.status(404).json({message: "Book not found"})
          else return res.status(200).json({"Message": "Book deleted successfully"}) ; 
      })
}



/*
exports.unknownPage = function(req, res){

}
*/
