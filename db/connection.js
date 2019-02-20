const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/question")
mongoose.Promise = Promise

module.exports = mongoose