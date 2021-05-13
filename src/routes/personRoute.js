const express = require('express');
const router = express.Router();
const personCtrl = require("../controllers/personControllers")
const instructions = require("../texts/instructions")

router.post('/persons', personCtrl.createNewPerson)

router.get('/persons', personCtrl.fetchPersons)


router.get('/persons/:id', personCtrl.fetchSinglePerson)

router.put('/persons/:id', personCtrl.updateSinglePerson)

router.delete('/persons/:id', personCtrl.deleteSinglePerson )

router.get('/', (req, res) => {
    res.end( instructions)
})

router.get('*', (req, res) => {
    res.json({message: "Page not found"})
})

module.exports = router;