const express = require('express')
const app = express()
let port = process.env.PORT || 8080;
const dbSetup = require("./database/setup")
const personRoute = require("./routes/personRoute")

app.use(express.json())

dbSetup()

app.use(personRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
