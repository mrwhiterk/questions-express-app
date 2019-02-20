const express = require('express')
const app = express()
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

app.set("view engine", "hbs")
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(methodOverride("_method"))
app.use(require("./routes/index"))

app.listen('3000', (req, res) => {
  console.log('app is running on port 3000')
})